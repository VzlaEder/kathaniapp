"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePageRoutingModule = void 0;
/* eslint-disable max-len */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_page_1 = require("./home.page");
var Authenticated_guard_1 = require("../../guards/Authenticated.guard");
var routes = [
    {
        path: '',
        component: home_page_1.HomePage,
        canActivate: [Authenticated_guard_1.Authenticated],
        children: [
            {
                path: 'start',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../start/start.module'); }).then(function (m) { return m.StartPageModule; }); }
            },
            {
                path: 'glucose-control',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../glucose-control/glucose-control.module'); }).then(function (m) { return m.GlucoseControlPageModule; }); }
            },
            {
                path: 'weith-control',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../weight-control/weight-control.module'); }).then(function (m) { return m.WeightControlPageModule; }); }
            },
            {
                path: 'treatment-control',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../treatment-control/treatment-control.module'); }).then(function (m) { return m.TreatmentControlPageModule; }); }
            },
            {
                path: 'statistics',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../statistics/statistics.module'); }).then(function (m) { return m.StatisticsPageModule; }); }
            },
            {
                path: 'glucose-history',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../glucose-history/glucose-history.module'); }).then(function (m) { return m.GlucoseHistoryPageModule; }); }
            },
            {
                path: 'glucose-log',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../glucose-log/glucose-log.module'); }).then(function (m) { return m.GlucoseLogPageModule; }); }
            },
            {
                path: 'weight-history',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../weight-history/weight-history.module'); }).then(function (m) { return m.WeightHistoryPageModule; }); }
            },
            {
                path: 'weight-log',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../weight-log/weight-log.module'); }).then(function (m) { return m.WeightLogPageModule; }); }
            },
            {
                path: 'tnon-pharmacological-history',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tnon-pharmacological-history/tnon-pharmacological-history.module'); }).then(function (m) { return m.TNonPharmacologicalHistoryPageModule; }); }
            },
            {
                path: 'tpharmacological-history',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tpharmacological-history/tpharmacological-history.module'); }).then(function (m) { return m.TPharmacologicalHistoryPageModule; }); }
            },
            {
                path: 'tnon-pharmacological-monitoring',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tnon-pharmacological-monitoring/tnon-pharmacological-monitoring.module'); }).then(function (m) { return m.TNonPharmacologicalMonitoringPageModule; }); }
            },
            {
                path: 'tpharmacological-monitoring',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tpharmacological-monitoring/tpharmacological-monitoring.module'); }).then(function (m) { return m.TPharmacologicalMonitoringPageModule; }); }
            },
            {
                path: 'profile',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../profile/profile.module'); }).then(function (m) { return m.ProfilePageModule; }); }
            },
            {
                path: 'qualify',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../qualify/qualify.module'); }).then(function (m) { return m.QualifyPageModule; }); }
            },
            {
                path: 'notifications',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../notifications/notifications.module'); }).then(function (m) { return m.NotificationsPageModule; }); }
            },
            {
                path: '',
                redirectTo: '/home/start',
                pathMatch: 'Full'
            }
        ]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());
exports.HomePageRoutingModule = HomePageRoutingModule;
