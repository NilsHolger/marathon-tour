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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
var MarathonFirebaseService = (function () {
    function MarathonFirebaseService(http) {
        this.http = http;
        this.marathonUrl = 'https://marathon-tour.firebaseio.com/.json';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MarathonFirebaseService.prototype.getAllMarathons = function () {
        return this.http.get(this.marathonUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MarathonFirebaseService.prototype.update = function (marathon) {
        return this.http
            .post(this.marathonUrl, JSON.stringify(marathon), { headers: this.headers })
            .toPromise()
            .then(function () { return marathon; })
            .catch(this.handleError);
    };
    MarathonFirebaseService.prototype.delete = function (marathonID) {
        console.log('DELETE ' + marathonID);
        return this.http.delete("https://marathon-tour.firebaseio.com/" + marathonID + ".json")
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
        //https://marathon-tour.firebaseio.com/-KRuWJx6T97Eq1RdAyph.json
        //return null;
    };
    MarathonFirebaseService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MarathonFirebaseService.prototype.create = function (id, name, description) {
        return this.http
            .post(this.marathonUrl, JSON.stringify({ id: id, name: name, description: description }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MarathonFirebaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MarathonFirebaseService);
    return MarathonFirebaseService;
}());
exports.MarathonFirebaseService = MarathonFirebaseService;
//# sourceMappingURL=marathon.firebase.service.js.map