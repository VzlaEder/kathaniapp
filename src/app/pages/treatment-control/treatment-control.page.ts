import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-control',
  templateUrl: './treatment-control.page.html',
  styleUrls: ['./treatment-control.page.scss'],
})
export class TreatmentControlPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToTratamientoNofarm() {
    this.router.navigate(['home/tnon-pharmacological-history']);
  }
  navigateToTratamientofarm() {
    this.router.navigate(['home/tpharmacological-history']);
  }
  navigateToSeguimientoTf() {
    this.router.navigate(['home/tpharmacological-monitoring']);
  }
  navigateToSeguimientoTnf() {
    this.router.navigate(['home/tnon-pharmacological-monitoring']);
  }

}
