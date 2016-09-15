/**
 * The browser platform without a compiler
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";

/**
 * The app module
 */
import {AppModule} from "./app.module";

let ENV:string = '<%%= ENV %>';
let PROD:string = 'prod';
if (ENV === PROD) {
    enableProdMode();
}

/**
 * Compile and launch the module
 */
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);