import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "components/app/app.component";
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {enableProdMode} from "@angular/core";

if ('<%= ENV %>' === 'prod') {
    enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);