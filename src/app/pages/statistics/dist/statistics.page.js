"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatisticsPage = void 0;
var core_1 = require("@angular/core");
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(router) {
        this.router = router;
    }
    StatisticsPage.prototype.ngOnInit = function () {
    };
    StatisticsPage.prototype.navigateToWeightStatistics = function () {
        this.router.navigate(['home/weight-statistics']);
    };
    StatisticsPage.prototype.navigateToGlucoseStatistics = function () {
        this.router.navigate(['home/glucose-statistics']);
    };
    StatisticsPage = __decorate([
        core_1.Component({
            selector: 'app-statistics',
            templateUrl: './statistics.page.html',
            styleUrls: ['./statistics.page.scss']
        })
    ], StatisticsPage);
    return StatisticsPage;
}());
exports.StatisticsPage = StatisticsPage;
