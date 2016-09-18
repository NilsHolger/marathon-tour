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
var MarathonSearchService = (function () {
    function MarathonSearchService(http) {
        this.http = http;
        this.marathonUrl = 'https://marathon-tour.firebaseio.com/.json';
    }
    MarathonSearchService.prototype.search = function (term) {
        return this.http.get(this.marathonUrl)
            .map(function (r) { return r.json(); })
            .map(function (marathons) {
            var result = [];
            if (marathons) {
                console.log(marathons);
                console.log(term);
                var keyArr = Object.keys(marathons), dataArr_1 = [];
                keyArr.forEach(function (key) {
                    dataArr_1.push(marathons[key]);
                });
                var searchTerm = term, index = -1;
                for (var i = 0, len = dataArr_1.length; i < len; i++) {
                    if (dataArr_1[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                        result.push(dataArr_1[i]);
                    }
                }
            }
            return result;
        });
    };
    ;
    MarathonSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MarathonSearchService);
    return MarathonSearchService;
}());
exports.MarathonSearchService = MarathonSearchService;
//# sourceMappingURL=marathon-search.service.js.map