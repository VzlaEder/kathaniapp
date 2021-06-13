"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TNonPharmacologicalHistoryPage = void 0;
var core_1 = require("@angular/core");
var TNonPharmacologicalHistoryPage = /** @class */ (function () {
    function TNonPharmacologicalHistoryPage(notreatmentService, toastService) {
        this.notreatmentService = notreatmentService;
        this.toastService = toastService;
        this.datosMember = JSON.parse(localStorage.getItem('member'));
    }
    TNonPharmacologicalHistoryPage.prototype.ngOnInit = function () {
        this.getTreatmentNonHistory();
    };
    TNonPharmacologicalHistoryPage.prototype.getTreatmentNonHistory = function () {
        var _this = this;
        this.notreatmentService.treatmentNoHistory().subscribe(function (res) {
            _this.cardDataTreatment = res.data;
            console.log(_this.cardDataTreatment);
        }, function (HttpErrorResponse) {
            console.log(HttpErrorResponse);
            var messageError = HttpErrorResponse.error.message;
            _this.toastService.presentToast(messageError);
        });
    };
    TNonPharmacologicalHistoryPage = __decorate([
        core_1.Component({
            selector: 'app-tnon-pharmacological-history',
            templateUrl: './tnon-pharmacological-history.page.html',
            styleUrls: ['./tnon-pharmacological-history.page.scss']
        })
    ], TNonPharmacologicalHistoryPage);
    return TNonPharmacologicalHistoryPage;
}());
exports.TNonPharmacologicalHistoryPage = TNonPharmacologicalHistoryPage;
