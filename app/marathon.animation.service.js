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
var Marathon = (function () {
    function Marathon(name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
    }
    Marathon.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return Marathon;
}());
var ALL_MARATHONS = [
    'Berlin',
    'Frankfurt',
    'Karlsruhe',
    'Hannover',
    'Freiburg',
    'New York',
    'Los Angeles',
    'London',
    'Paris',
    'Tokio',
    'Sydney'
].map(function (name) { return new Marathon(name); });
var Marathons = (function () {
    function Marathons() {
        this.currentMarathons = [];
    }
    Marathons.prototype[Symbol.iterator] = function () {
        return this.currentMarathons.values();
    };
    Marathons.prototype.canAdd = function () {
        return this.currentMarathons.length < ALL_MARATHONS.length;
    };
    Marathons.prototype.canRemove = function () {
        return this.currentMarathons.length > 0;
    };
    Marathons.prototype.addActive = function () {
        var marathon = ALL_MARATHONS[this.currentMarathons.length];
        marathon.state = 'active';
        this.currentMarathons.push(marathon);
    };
    Marathons.prototype.addInactive = function () {
        var marathon = ALL_MARATHONS[this.currentMarathons.length];
        marathon.state = 'inactive';
        this.currentMarathons.push(marathon);
    };
    Marathons.prototype.remove = function () {
        this.currentMarathons.splice(this.currentMarathons.length - 1, 1);
    };
    Marathons = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Marathons);
    return Marathons;
}());
exports.Marathons = Marathons;
//# sourceMappingURL=marathon.animation.service.js.map