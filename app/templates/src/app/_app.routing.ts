
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { AboutRoutes } from './components/+about/index';
import { HomeRoutes } from './components/+home/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);