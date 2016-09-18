"use strict";
var router_1 = require('@angular/router');
var marathons_component_1 = require('./marathons.component');
var marathon_detail_component_1 = require('./marathon-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: 'marathons',
        component: marathons_component_1.MarathonsComponent
    },
    {
        path: 'detail/:id',
        component: marathon_detail_component_1.MarathonDetailComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
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
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map