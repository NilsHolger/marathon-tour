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
var marathon_service_1 = require('./marathon.service');
var AnimationTwoComponent = (function () {
    function AnimationTwoComponent(marathonService) {
        this.marathonService = marathonService;
        this.marathons = [];
    }
    AnimationTwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marathonService.getMarathons().then(function (marathons) { return _this.marathons = marathons; });
    };
    AnimationTwoComponent.prototype.gotoDetail = function (marathon) {
    };
    AnimationTwoComponent = __decorate([
        core_1.Component({
            selector: 'my-animationtwo',
            templateUrl: 'app/animationtwo.component.html'
        }), 
        __metadata('design:paramtypes', [marathon_service_1.MarathonService])
    ], AnimationTwoComponent);
    return AnimationTwoComponent;
}());
exports.AnimationTwoComponent = AnimationTwoComponent;
//# sourceMappingURL=animationtwo.component.js.map