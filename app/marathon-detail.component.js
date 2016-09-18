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
var router_1 = require('@angular/router');
var marathon_service_1 = require('./marathon.service');
var marathon_firebase_service_1 = require('./marathon.firebase.service');
var MarathonDetailComponent = (function () {
    function MarathonDetailComponent(marathonService, route, marathonFirebaseService) {
        this.marathonService = marathonService;
        this.route = route;
        this.marathonFirebaseService = marathonFirebaseService;
    }
    MarathonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            _this.marathonFirebaseService.getAllMarathons().then(function (marathons) { return _this.marathons = marathons; });
        });
    };
    MarathonDetailComponent.prototype.save = function () {
        //this.marathonFirebaseService.update(this.marathon)
        //.then(this.goBack());
        this.goBack();
    };
    MarathonDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MarathonDetailComponent.prototype, "marathons", void 0);
    MarathonDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-marathon-detail',
            templateUrl: './app/marathon-detail.component.html',
            styleUrls: ['./app/marathon-detail.component.css']
        }), 
        __metadata('design:paramtypes', [marathon_service_1.MarathonService, router_1.ActivatedRoute, marathon_firebase_service_1.MarathonFirebaseService])
    ], MarathonDetailComponent);
    return MarathonDetailComponent;
}());
exports.MarathonDetailComponent = MarathonDetailComponent;
//# sourceMappingURL=marathon-detail.component.js.map