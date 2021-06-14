"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StartPage = void 0;
var core_1 = require("@angular/core");
var StartPage = /** @class */ (function () {
    function StartPage(startService) {
        this.startService = startService;
        this.data = {
            glucosaActual: null,
            pesoActual: null,
            altura: null
        };
    }
    StartPage.prototype.ngOnInit = function () {
        this.getGlucoseHistory();
    };
    StartPage.prototype.getGlucoseHistory = function () {
        var _this = this;
        this.startService.dashBoardData().subscribe(function (res) {
            _this.data = res.data;
        });
    };
    StartPage.prototype.colorW = function (val) {
        if (val < 18.5 || val > 30.0) {
            return 'danger';
        }
        else if (val >= 25.0 && val <= 29.9) {
            return 'warning';
        }
        return 'success';
    };
    StartPage.prototype.bodyCondition = function (val) {
        if (val < 18.5) {
            return 'Peso bajo';
        }
        else if (val >= 18.5 && val <= 24.9) {
            return 'Peso Normal';
        }
        else if (val >= 25.0 && val <= 29.9) {
            return 'Sobrepeso';
        }
        else {
            return 'Obesidad';
        }
    };
    StartPage.prototype.riesgoW = function (val) {
        if (val < 18.5 || val > 30.0) {
            return 'Riesgo alto';
        }
        else if (val >= 25.0 && val <= 29.9) {
            return 'Riesgo leve';
        }
        return 'Sin riesgos';
    };
    StartPage.prototype.riesgoG = function (val) {
        if (val < 70 || val > 125) {
            return 'Riesgo alto';
        }
        else if (val >= 101 && val <= 125) {
            return 'Riesgo medio';
        }
        return 'Sin riesgos';
    };
    StartPage.prototype.colorG = function (val) {
        if (val < 70 || val > 125) {
            return 'danger';
        }
        else if (val >= 101 && val <= 125) {
            return 'warning';
        }
        return 'success';
    };
    StartPage.prototype.consejo = function (val) {
        if (val < 70 || val > 125) {
            return 'Consulta tu médico';
        }
        else if (val >= 101 && val <= 125) {
            return 'Mejora tus hábitos';
        }
        return 'success';
    };
    StartPage = __decorate([
        core_1.Component({
            selector: 'app-start',
            templateUrl: './start.page.html',
            styleUrls: ['./start.page.scss']
        })
    ], StartPage);
    return StartPage;
}());
exports.StartPage = StartPage;
