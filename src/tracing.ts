// OpenTelemetry tracing module

import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import process from 'process';

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