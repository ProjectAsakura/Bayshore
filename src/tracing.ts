// OpenTelemetry tracing module

import * as opentelemetry from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import process from 'process';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new opentelemetry.NodeSDK({
    traceExporter: new OTLPTraceExporter({
        url: process.env.OPENTELEMETRY_OTLP_URI,
        headers: {}
    }),
    instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();