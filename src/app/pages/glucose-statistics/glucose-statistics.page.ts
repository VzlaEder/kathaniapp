import { Component, OnInit } from '@angular/core';
import { GlucoseService } from '../../services/glucose.service';
import {
  Chart,
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
  Tooltip
} from 'chart.js';



@Component({
  selector: 'app-glucose-statistics',
  templateUrl: './glucose-statistics.page.html',
  styleUrls: ['./glucose-statistics.page.scss'],
})
export class GlucoseStatisticsPage implements OnInit {

  labels: any;
  date: any;
  myChart: any;


  constructor(private glucoseService: GlucoseService) {
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

  ngOnInit() { }

  ionViewDidEnter() {
    this.glucosestatistics();
  }

  glucosestatistics() {
    this.glucoseService.glucoseStatistics().subscribe(res => {
      this.labels = res.data.fecha;
      this.date = res.data.glucosa.map(item => parseFloat(item));
      const canvas = document.getElementById('glucose-statistics') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Nivel de glucosa',
              fill: false,
              borderCapStyle: 'butt',
              borderJoinStyle: 'miter',
              data: this.date,
              backgroundColor: 'rgba(255, 0, 0)',
              borderColor: 'rgba(255, 0, 0)',
            }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Comportamiento de tus niveles de glucosa.'
            }
          }
        },
      });
    });
  }

}
