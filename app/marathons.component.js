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
var marathon_firebase_service_1 = require('./marathon.firebase.service');
var MarathonsComponent = (function () {
    function MarathonsComponent(router, marathonFirebaseService) {
        this.router = router;
        this.marathonFirebaseService = marathonFirebaseService;
        this.minimum = 100;
        this.maximum = 1000000;
    }
    MarathonsComponent.prototype.ngOnInit = function () {
        this.getMarathons();
    };
    MarathonsComponent.prototype.getMarathons = function () {
        var _this = this;
        this.marathonFirebaseService.getAllMarathons().then(function (marathons) { return _this.marathons = marathons; });
    };
    MarathonsComponent.prototype.add = function (name, description) {
        var _this = this;
        name = name.trim();
        description = description.trim();
        if (!name || !description) {
            return;
        }
        this.marathonFirebaseService.create(this.getRandomNumber(), name, description)
            .then(function (marathon) {
            _this.selectedMarathon = null;
        });
    };
    MarathonsComponent.prototype.delete = function (marathon) {
        this.marathonFirebaseService.getAllMarathons().then(function (data) {
            console.log('ID ' + marathon.id);
            console.log('DELETE DATA ' + data);
            if (data === undefined || data === null) {
                return;
            }
            var keyArr = Object.keys(data), dataArr = [];
            keyArr.forEach(function (key) {
                console.log(key);
                dataArr.push(key);
                dataArr.push(data[key]);
            });
            var foundArray = [];
            var searchTerm = marathon.id, index = -1;
            for (var i = 0; i < dataArr.length; i++) {
                if (foundArray.length === 1) {
                    break;
                }
                for (var k = 0; k < dataArr.length; k++) {
                    if (dataArr[k].id === searchTerm) {
                        foundArray.push(dataArr[k - 1]);
                        console.log(foundArray);
                        break;
                    }
                }
            }
        });
        // this.marathonFirebaseService.delete(foundArray)
        //   .then(() => {
        //     this.marathons = this.marathons.filter(m => m != marathon);
        //     if (this.selectedMarathon === marathon) { this.selectedMarathon === null; }
        //   });
    };
    MarathonsComponent.prototype.onSelect = function (marathon) {
        this.selectedMarathon = marathon;
    };
    MarathonsComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/detail', this.selectedMarathon.id]);
    };
    MarathonsComponent.prototype.getRandomNumber = function () {
        return Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum;
    };
    MarathonsComponent = __decorate([
        core_1.Component({
            selector: 'my-marathons',
            templateUrl: './app/marathons.component.html',
            styleUrls: ['./app/marathons.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, marathon_firebase_service_1.MarathonFirebaseService])
    ], MarathonsComponent);
    return MarathonsComponent;
}());
exports.MarathonsComponent = MarathonsComponent;
//# sourceMappingURL=marathons.component.js.map