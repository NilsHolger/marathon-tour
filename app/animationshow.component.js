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
var marathon_animation_service_1 = require('./marathon.animation.service');
var AnimationShowComponent = (function () {
    function AnimationShowComponent(marathons) {
        this.marathons = marathons;
    }
    AnimationShowComponent = __decorate([
        core_1.Component({
            selector: 'marathon-animation-show',
            template: "\n      <div>\n        <marathon-list-enter-leave [marathons]=marathons></marathon-list-enter-leave>\n      </div>\n  ",
            styles: ["\n    .buttons {\n      text-align: center;\n    }\n    button {\n      padding: 1.5em 3em;\n    }\n    .columns {\n      display: flex;\n      flex-direction: row;\n    }\n    .column {\n      flex: 1;\n      padding: 10px;\n    }\n    .column p {\n      min-height: 6em;\n    }\n  "],
            providers: [marathon_animation_service_1.Marathons]
        }), 
        __metadata('design:paramtypes', [marathon_animation_service_1.Marathons])
    ], AnimationShowComponent);
    return AnimationShowComponent;
}());
exports.AnimationShowComponent = AnimationShowComponent;
//# sourceMappingURL=animationshow.component.js.map