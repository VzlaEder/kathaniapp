"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WeightService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var WeightService = /** @class */ (function () {
    function WeightService(httpService) {
        this.httpService = httpService;
        this.weightH = new rxjs_1.BehaviorSubject([]);
    }
    WeightService.prototype.changeWeightHistory = function (data) {
        this.weightH.next(data);
    };
    WeightService.prototype.weightHistory = function () {
        return this.httpService.get('movil-diabetic/registerweight');
    };
    WeightService.prototype.weightUP = function (postData) {
        return this.httpService.posttoken('movil-diabetic/register-weight', postData);
    };
    WeightService.prototype.weightStatistics = function () {
        return this.httpService.get('movil-diabetic/stadististic-weight');
    };
    WeightService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], WeightService);
    return WeightService;
}());
exports.WeightService = WeightService;
