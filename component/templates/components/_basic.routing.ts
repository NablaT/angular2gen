import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import { <%= componentName %>Component  } from './index';

const <%= argsInKebab %>Routes: Routes = [
    {
        path: '<%= argsInKebab %>',
        component: <%= componentName %>Component
    }
];

export const appRoutingProviders: any[] = [

];

export const <%= argsInKebab %>Routing: ModuleWithProviders = RouterModule.forChild(<%= argsInKebab %>Routes);