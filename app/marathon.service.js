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
var mock_marathons_1 = require('./mock-marathons');
var MarathonService = (function () {
    function MarathonService() {
    }
    MarathonService.prototype.getMarathons = function () {
        return Promise.resolve(mock_marathons_1.MARATHONS);
    };
    MarathonService.prototype.getMarathon = function (id) {
        return this.getMarathons().then(function (marathons) { return marathons.find(function (marathon) { return marathon.id === id; }); });
    };
    MarathonService.prototype.getMarathonsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 5000);
        })
            .then(function () { return _this.getMarathons(); });
    };
    MarathonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MarathonService);
    return MarathonService;
}());
exports.MarathonService = MarathonService;
//# sourceMappingURL=marathon.service.js.map