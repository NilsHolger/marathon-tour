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
var AnimationOneComponent = (function () {
    function AnimationOneComponent(marathonService) {
        this.marathonService = marathonService;
        this.marathons = [];
    }
    AnimationOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marathonService.getMarathons().then(function (marathons) { return _this.marathons = marathons; });
    };
    AnimationOneComponent.prototype.gotoDetail = function (marathon) {
    };
    AnimationOneComponent = __decorate([
        core_1.Component({
            selector: 'my-animationone',
            templateUrl: 'app/animationone.component.html'
        }), 
        __metadata('design:paramtypes', [marathon_service_1.MarathonService])
    ], AnimationOneComponent);
    return AnimationOneComponent;
}());
exports.AnimationOneComponent = AnimationOneComponent;
//# sourceMappingURL=animationone.component.js.map