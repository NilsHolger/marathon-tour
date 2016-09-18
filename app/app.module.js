"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('./rxjs-extensions');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var marathons_component_1 = require('./marathons.component');
var marathon_detail_component_1 = require('./marathon-detail.component');
var marathon_service_1 = require('./marathon.service');
var marathon_firebase_service_1 = require('./marathon.firebase.service');
var marathon_search_service_1 = require('./marathon-search.service');
var marathon_animation_service_1 = require('./marathon.animation.service');
var dashboard_component_1 = require('./dashboard.component');
var marathon_search_component_1 = require('./marathon-search.component');
var animationshow_component_1 = require('./animationshow.component');
var animation_component_1 = require('./animation.component');
var animationone_component_1 = require('./animationone.component');
var animationtwo_component_1 = require('./animationtwo.component');
var app_valuepipe_1 = require('./app.valuepipe');
var app_filterpipe_1 = require('./app.filterpipe');
var app_reducecharacterspipe_1 = require('./app.reducecharacterspipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, app_valuepipe_1.ValuesPipe, app_filterpipe_1.FilterPipe, app_reducecharacterspipe_1.ReduceCharactersPipe, dashboard_component_1.DashboardComponent, animationshow_component_1.AnimationShowComponent, marathons_component_1.MarathonsComponent, marathon_detail_component_1.MarathonDetailComponent, marathon_search_component_1.MarathonSearchComponent, animation_component_1.AnimationComponent, animationone_component_1.AnimationOneComponent, animationtwo_component_1.AnimationTwoComponent],
            providers: [marathon_service_1.MarathonService, marathon_firebase_service_1.MarathonFirebaseService, marathon_search_service_1.MarathonSearchService, marathon_animation_service_1.Marathons],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map