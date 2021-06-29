import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service';
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
  selector: 'app-weight-statistics',
  templateUrl: './weight-statistics.page.html',
  styleUrls: ['./weight-statistics.page.scss'],
})
export class WeightStatisticsPage implements OnInit {

  labels: any;
  date: any;
  myChart: any;

  constructor(private weightService: WeightService) {
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

  ngOnInit() {}

  ionViewDidEnter(){
    this.createBarChart();
  }

  createBarChart() {
    this.weightService.weightStatistics().subscribe(res=>{
      this.labels = res.data.fecha;
      this.date = res.data.peso.map(item=> parseFloat(item));
      const canvas = document.getElementById('weight-statistics') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if(this.myChart){
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels:this.labels,
          datasets: [
            {
            label: 'Niveles de glucosa',
            fill: false,
            borderCapStyle:'butt',
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
              text: 'Evolución de tu peso.'
            }
          }
        },
      });
    });
  }

}
