import { Application } from "express";
import {Module} from "module";

export default class StartupModule extends Module {
    register(app: Application): void {
        console.log('test!');
    }
}