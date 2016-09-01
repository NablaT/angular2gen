import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppModule} from "./app.module";

if ('<%= ENV %>' === 'prod') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);