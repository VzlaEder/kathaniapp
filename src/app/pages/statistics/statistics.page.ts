import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToWeightStatistics() {
    this.router.navigate(['home/weight-statistics']);
  }
  navigateToGlucoseStatistics() {
    this.router.navigate(['home/glucose-statistics']);
  }

}
