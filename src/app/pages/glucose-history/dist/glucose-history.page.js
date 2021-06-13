"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlucoseHistoryPage = void 0;
var core_1 = require("@angular/core");
var GlucoseHistoryPage = /** @class */ (function () {
    function GlucoseHistoryPage(glucoseService) {
        this.glucoseService = glucoseService;
        this.getGlucoseHistory();
    }
    GlucoseHistoryPage.prototype.ngOnInit = function () { };
    GlucoseHistoryPage.prototype.getGlucoseHistory = function () {
        var _this = this;
        this.glucoseService.glucoseHistory().subscribe(function (res) {
            console.log(res.data);
            _this.glucoseService.changeGlucoseHistory(res.data);
        });
    };
    GlucoseHistoryPage = __decorate([
        core_1.Component({
            selector: 'app-glucose-history',
            templateUrl: './glucose-history.page.html',
            styleUrls: ['./glucose-history.page.scss']
        })
    ], GlucoseHistoryPage);
    return GlucoseHistoryPage;
}());
exports.GlucoseHistoryPage = GlucoseHistoryPage;
