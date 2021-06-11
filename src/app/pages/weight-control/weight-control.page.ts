import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weight-control',
  templateUrl: './weight-control.page.html',
  styleUrls: ['./weight-control.page.scss'],
})
export class WeightControlPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPesoHistory() {
    this.router.navigate(['home/weight-history']);
  }
  navigateToRegistroPeso() {
    this.router.navigate(['home/weight-log']);
  }

}
