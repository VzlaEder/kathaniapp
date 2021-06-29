"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WeightStatisticsPage = void 0;
var core_1 = require("@angular/core");
var chart_js_1 = require("chart.js");
var WeightStatisticsPage = /** @class */ (function () {
    function WeightStatisticsPage(weightService) {
        this.weightService = weightService;
        chart_js_1.Chart.register(chart_js_1.ArcElement, chart_js_1.LineElement, chart_js_1.BarElement, chart_js_1.PointElement, chart_js_1.BarController, chart_js_1.BubbleController, chart_js_1.DoughnutController, chart_js_1.LineController, chart_js_1.PieController, chart_js_1.PolarAreaController, chart_js_1.RadarController, chart_js_1.ScatterController, chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.LogarithmicScale, chart_js_1.RadialLinearScale, chart_js_1.TimeScale, chart_js_1.TimeSeriesScale, chart_js_1.Decimation, chart_js_1.Filler, chart_js_1.Legend, chart_js_1.Title, chart_js_1.Tooltip);
    }
    WeightStatisticsPage.prototype.ngOnInit = function () { };
    WeightStatisticsPage.prototype.ionViewDidEnter = function () {
        this.createBarChart();
    };
    WeightStatisticsPage.prototype.createBarChart = function () {
        var _this = this;
        this.weightService.weightStatistics().subscribe(function (res) {
            _this.labels = res.data.fecha;
            _this.date = res.data.peso.map(function (item) { return parseFloat(item); });
            var canvas = document.getElementById('weight-statistics');
            var ctx = canvas.getContext('2d');
            if (_this.myChart) {
                _this.myChart.destroy();
            }
            _this.myChart = new chart_js_1.Chart(ctx, {
                type: 'line',
                data: {
                    labels: _this.labels,
                    datasets: [
                        {
                            label: 'Niveles de glucosa',
                            fill: false,
                            borderCapStyle: 'butt',
                            borderJoinStyle: 'miter',
                            data: _this.date,
                            backgroundColor: 'rgba(255, 0, 0)',
                            borderColor: 'rgba(255, 0, 0)'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        },
                        title: {
                            display: true,
                            text: 'Evolución de tu peso.'
                        }
                    }
                }
            });
        });
    };
    WeightStatisticsPage = __decorate([
        core_1.Component({
            selector: 'app-weight-statistics',
            templateUrl: './weight-statistics.page.html',
            styleUrls: ['./weight-statistics.page.scss']
        })
    ], WeightStatisticsPage);
    return WeightStatisticsPage;
}());
exports.WeightStatisticsPage = WeightStatisticsPage;
