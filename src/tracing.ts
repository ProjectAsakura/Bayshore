// OpenTelemetry tracing module

import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import process from 'process';
import {Request, Response, Application} from 'express';
import { AggregationTemporality, MeterProvider, PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';

export function startTracing() {
    diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

    const sdk = new opentelemetry.NodeSDK({
        traceExporter: new OTLPTraceExporter({
            url: process.env.OPENTELEMETRY_OTLP_URI,
            headers: {}
        }),
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: 'bayshore',
            [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]:
                process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'development',
        }),
        instrumentations: [getNodeAutoInstrumentations()]
    });
    
    sdk.start();
}

interface MiddlewareOpts {
    appName: string,
}

interface HttpMetricsParameter {
    app: Application,
    options: MiddlewareOpts
}

// TODO: Implement stuff in such a way to make it be possible to view data like
//       time attack clears per hour, story stuff etc etc. Not now tho, later
export function startHttpMetrics(apps: HttpMetricsParameter[]) {
    const provider = new MeterProvider({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: 'bayshore',
            [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]:
                process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'development',
        }),
    });
    
    function configureMiddleware(opts: MiddlewareOpts) {
        let meter = provider.getMeter(opts.appName);
        var counter = meter.createCounter('requests_made', {
            description: 'Number of requests registered to application'
        });

        return function(req: Request, res: Response, next: CallableFunction) {
            counter.add(1, {
                url: req.url
            });
            next();
        }
    }

    console.log('Registering middleware metrics');

    for (let appObj of apps) {
        console.log(`Registered metrics application for ${appObj.options.appName}`);
        appObj.app.use(configureMiddleware(appObj.options));
    }

    const exporter = new OTLPMetricExporter({
        url: process.env.OPENTELEMETRY_OTLP_HTTP_URI,
    });

    provider.addMetricReader(new PeriodicExportingMetricReader({
        exporter,
        exportIntervalMillis: 15000,
        exportTimeoutMillis: 1000,
    }));

    console.log('Metrics started');
}