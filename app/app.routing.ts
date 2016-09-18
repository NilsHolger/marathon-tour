import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarathonsComponent } from './marathons.component';
import { MarathonDetailComponent } from './marathon-detail.component';
import { DashboardComponent } from './dashboard.component';

import { AnimationShowComponent } from './animationshow.component';
import { AnimationComponent } from './animation.component';
import { AnimationOneComponent } from './animationone.component';
import { AnimationTwoComponent } from './animationtwo.component';



const appRoutes: Routes = [

    {
        path: 'marathons',
        component: MarathonsComponent
    },
    {
        path: 'detail/:id',
        component: MarathonDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    // {
    //     path: 'animation',
    //     component: AnimationShowComponent
    // },
    // {
    //     path: 'animationone',
    //     component: AnimationOneComponent
    // },
    // {
    //     path: 'animationtwo',
    //     component: AnimationTwoComponent
    // },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);