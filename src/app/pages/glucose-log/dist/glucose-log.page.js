"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlucoseLogPage = void 0;
var core_1 = require("@angular/core");
var GlucoseLogPage = /** @class */ (function () {
    function GlucoseLogPage(router, glucoseService, toastService) {
        this.router = router;
        this.glucoseService = glucoseService;
        this.toastService = toastService;
        this.postGlucoseData = {
            nivel_glusemia: null,
            fecha: null,
            hora: null,
            comida: ''
        };
    }
    GlucoseLogPage.prototype.ngOnInit = function () { };
    GlucoseLogPage.prototype.glucoseDataUP = function () {
        var _this = this;
        this.glucoseService.glucoseUP(this.postGlucoseData).subscribe(function (res) {
            console.log(res);
        }, function (HttpErrorResponse) {
            console.log(HttpErrorResponse);
            var messageError = HttpErrorResponse.error.message;
            _this.toastService.presentToast(messageError);
        });
    };
    GlucoseLogPage = __decorate([
        core_1.Component({
            selector: 'app-glucose-log',
            templateUrl: './glucose-log.page.html',
            styleUrls: ['./glucose-log.page.scss']
        })
    ], GlucoseLogPage);
    return GlucoseLogPage;
}());
exports.GlucoseLogPage = GlucoseLogPage;
