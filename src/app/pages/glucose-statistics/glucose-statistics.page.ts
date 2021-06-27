import { Component, OnInit } from '@angular/core';

import { Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip } from 'chart.js';

@Component({
  selector: 'app-glucose-statistics',
  templateUrl: './glucose-statistics.page.html',
  styleUrls: ['./glucose-statistics.page.scss'],
})
export class GlucoseStatisticsPage implements OnInit {


  bars: any;
  colorArray: any;

  constructor() {
    Chart.register(ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip);
  }

  ngOnInit() {
    this.createBarChart();
  }

  createBarChart() {
    const canvas = document.getElementById('glucose-statistics') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        datasets: [
          {
          label: 'Niveles de glucosa',
          fill: false,
          borderCapStyle:'butt',
          borderJoinStyle: 'miter',
          data: [50,60,50,20,100,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          backgroundColor: 'rgba(255, 0, 0)',
          borderColor: 'rgba(255, 0, 0)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    });
  }
}
