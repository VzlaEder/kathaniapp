"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardGhComponent = void 0;
var core_1 = require("@angular/core");
var CardGhComponent = /** @class */ (function () {
    function CardGhComponent(glucoseService) {
        this.glucoseService = glucoseService;
    }
    CardGhComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.glucoseService.glucoseH.subscribe(function (res) {
            _this.cardDataG = res;
        });
    };
    CardGhComponent.prototype.color = function (val) {
        if (val < 70 || val > 125) {
            return 'danger';
        }
        else if (val >= 101 && val <= 125) {
            return 'warning';
        }
        return 'success';
    };
    CardGhComponent.prototype.placeholder = function (val) {
        if (val < 70 || val > 125) {
            return 'Riesgo alto';
        }
        else if (val >= 101 && val <= 125) {
            return 'Riesgo leve';
        }
        return 'Sin riesgos';
    };
    CardGhComponent = __decorate([
        core_1.Component({
            selector: 'app-card-gh',
            templateUrl: './card-gh.component.html',
            styleUrls: ['./card-gh.component.scss']
        })
    ], CardGhComponent);
    return CardGhComponent;
}());
exports.CardGhComponent = CardGhComponent;
