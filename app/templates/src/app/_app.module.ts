import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { AboutModule } from './components/+about/about.module';
import { HomeModule } from './components/+home/home.module';
import { HeaderModule } from './components/header/header.module';


/**
 * Modules are a good way to organize the application and allow you to add new capabilities to your app
 * thanks to external libraries.
 * app.module.ts is the root module class of your angular application. NgModule defines the metadata for AppModule
 * The main goal here is to import everything you need for your app
 */
@NgModule({
    //Declaration: The list identifies the root component, here the component AppComponent. We define the top of this app's rather bare component tree.
    declarations: [AppComponent],
    //Imports: Modules to import
    imports:
        [BrowserModule, //BrowserModule: Registers critical application service providers. It also contains native directives like NgIf and NgFor.
            HttpModule, RouterModule, routing, //Module you need for your future HTTP services and for the routing system of your app
                AboutModule, HomeModule, HeaderModule], //Modules we have been developed
    providers: [appRoutingProviders], // Here you can provide the services you need for all your components. We add here the services for the routing
    bootstrap:    [AppComponent], //We define the bootstrap component. When Angular launches the app, it places the HTML rendering of AppComponent in the DOM,
                                    // inside the <app> element tags of the index.html
})
export class AppModule {}