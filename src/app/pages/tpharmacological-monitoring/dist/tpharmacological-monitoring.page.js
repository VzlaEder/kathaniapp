"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TPharmacologicalMonitoringPage = void 0;
var core_1 = require("@angular/core");
var TPharmacologicalMonitoringPage = /** @class */ (function () {
    function TPharmacologicalMonitoringPage(router, treatmentService, toastService) {
        this.router = router;
        this.treatmentService = treatmentService;
        this.toastService = toastService;
    }
    TPharmacologicalMonitoringPage.prototype.ngOnInit = function () {
        this.getTreatmentList();
    };
    TPharmacologicalMonitoringPage.prototype.ionViewDidEnter = function () {
        this.getTreatmentList();
    };
    TPharmacologicalMonitoringPage.prototype.getTreatmentList = function () {
        var _this = this;
        this.treatmentService.treatmentList().subscribe(function (res) {
            _this.cardDataTreatment = res.data;
            console.log(_this.cardDataTreatment);
        });
    };
    TPharmacologicalMonitoringPage.prototype.postTreatmentId = function (treatmentfollowup) {
        var _this = this;
        var data = {
            patient_treatment_id: treatmentfollowup.id
        };
        this.loading = true;
        this.treatmentService.treatmentRegID(data).subscribe(function (res) {
            var messageSuccess = res.message;
            _this.toastService.presentToast(messageSuccess);
            var index = _this.cardDataTreatment.indexOf(treatmentfollowup);
            _this.cardDataTreatment.splice(index, 1);
            _this.loading = false;
            console.log(res);
        }, function (err) {
            _this.loading = false;
            console.log(err);
            var messageError = err.error.message;
            _this.toastService.presentToast(messageError);
        });
    };
    TPharmacologicalMonitoringPage = __decorate([
        core_1.Component({
            selector: 'app-tpharmacological-monitoring',
            templateUrl: './tpharmacological-monitoring.page.html',
            styleUrls: ['./tpharmacological-monitoring.page.scss']
        })
    ], TPharmacologicalMonitoringPage);
    return TPharmacologicalMonitoringPage;
}());
exports.TPharmacologicalMonitoringPage = TPharmacologicalMonitoringPage;
