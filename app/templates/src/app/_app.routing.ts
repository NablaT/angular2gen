
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { AboutRoutes } from './components/+about/index';
import { HomeRoutes } from './components/+home/index';

/**
 * app.routing.ts is the file used to define application routes. Routes tell the router which views to display
 * when a user clicks on a link.
 */

/**
 * appRoutes is a list of routes. You have two way to define routes:
 * v1: {
 *          path: '',
 *          component: HomeComponent
 *     }
 * v2: import an existing route: ...HomeRoutes
 *
 * Here we would rather import route files and define the routes in each route file than define everything
 * here in app.ro   9uting.ts. In the future, it will be easier to maintain our routes with imported routes.
 */
const appRoutes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes
];


export const appRoutingProviders: any[] = [

];

/**
 * We pass the array of routes appRoutes in the RouterModule.forRoot method which returns a module containing
 * the configured Router service provider. We export the module through the variable routing.
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);