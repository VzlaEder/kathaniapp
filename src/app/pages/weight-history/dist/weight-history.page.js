"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WeightHistoryPage = void 0;
var core_1 = require("@angular/core");
var WeightHistoryPage = /** @class */ (function () {
    function WeightHistoryPage(weightService) {
        this.weightService = weightService;
    }
    WeightHistoryPage.prototype.ngOnInit = function () {
        this.getWeihtHistory();
    };
    WeightHistoryPage.prototype.ionViewDidEnter = function () {
        this.getWeihtHistory();
    };
    WeightHistoryPage.prototype.getWeihtHistory = function () {
        var _this = this;
        this.weightService.weightHistory().subscribe(function (res) {
            console.log(res.data);
            _this.weightService.changeWeightHistory(res.data);
        });
    };
    WeightHistoryPage = __decorate([
        core_1.Component({
            selector: 'app-weight-history',
            templateUrl: './weight-history.page.html',
            styleUrls: ['./weight-history.page.scss']
        })
    ], WeightHistoryPage);
    return WeightHistoryPage;
}());
exports.WeightHistoryPage = WeightHistoryPage;
