import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { AboutModule } from './components/+about/about.module';
import { HomeModule } from './components/+home/home.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, HttpModule, RouterModule, routing, AboutModule, HomeModule, HeaderModule],
    providers: [appRoutingProviders],
    bootstrap:    [AppComponent],
})
export class AppModule {}