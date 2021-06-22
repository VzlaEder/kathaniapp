"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlucoseControlPage = void 0;
var core_1 = require("@angular/core");
var GlucoseControlPage = /** @class */ (function () {
    function GlucoseControlPage(router) {
        this.router = router;
    }
    GlucoseControlPage.prototype.ngOnInit = function () { };
    GlucoseControlPage.prototype.navigateToGlucosaHistory = function () {
        this.router.navigate(['home/glucose-log']);
    };
    GlucoseControlPage.prototype.navigateToRegistroGlucosa = function () {
        this.router.navigate(['home/glucose-history']);
    };
    GlucoseControlPage = __decorate([
        core_1.Component({
            selector: 'app-glucose-control',
            templateUrl: './glucose-control.page.html',
            styleUrls: ['./glucose-control.page.scss']
        })
    ], GlucoseControlPage);
    return GlucoseControlPage;
}());
exports.GlucoseControlPage = GlucoseControlPage;
