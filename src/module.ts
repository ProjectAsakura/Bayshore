import {Application} from 'express';

export abstract class Module {
    abstract register(app: Application): void;
}