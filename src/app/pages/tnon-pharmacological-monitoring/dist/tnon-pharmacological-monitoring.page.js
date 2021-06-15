"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TNonPharmacologicalMonitoringPage = void 0;
var core_1 = require("@angular/core");
var TNonPharmacologicalMonitoringPage = /** @class */ (function () {
    function TNonPharmacologicalMonitoringPage(router, toastService, notreatmentService) {
        this.router = router;
        this.toastService = toastService;
        this.notreatmentService = notreatmentService;
        this.datosMember = JSON.parse(localStorage.getItem('member'));
    }
    TNonPharmacologicalMonitoringPage.prototype.ngOnInit = function () {
        this.getTreatmentList();
    };
    TNonPharmacologicalMonitoringPage.prototype.ionViewDidEnter = function () {
        this.getTreatmentList();
    };
    TNonPharmacologicalMonitoringPage.prototype.getTreatmentList = function () {
        var _this = this;
        this.notreatmentService.treatmentNoList().subscribe(function (res) {
            _this.cardDataTreatment = res.data;
            console.log(_this.cardDataTreatment);
        });
    };
    TNonPharmacologicalMonitoringPage.prototype.postTreatmentId = function (treatmentfollowup) {
        var _this = this;
        console.log(treatmentfollowup);
        var data = {
            activity_treatment_id: treatmentfollowup.id
        };
        console.log(data);
        this.notreatmentService.treatmentNoRegID(data).subscribe(function (res) {
            console.log(res);
            var messageSuccess = res.message;
            _this.toastService.presentToast(messageSuccess);
            var index = _this.cardDataTreatment.indexOf(treatmentfollowup);
            _this.cardDataTreatment.splice(index, 1);
        }, function (err) {
            console.log(err);
            var messageError = err.error.message;
            _this.toastService.presentToast(messageError);
        });
    };
    TNonPharmacologicalMonitoringPage = __decorate([
        core_1.Component({
            selector: 'app-tnon-pharmacological-monitoring',
            templateUrl: './tnon-pharmacological-monitoring.page.html',
            styleUrls: ['./tnon-pharmacological-monitoring.page.scss']
        })
    ], TNonPharmacologicalMonitoringPage);
    return TNonPharmacologicalMonitoringPage;
}());
exports.TNonPharmacologicalMonitoringPage = TNonPharmacologicalMonitoringPage;
