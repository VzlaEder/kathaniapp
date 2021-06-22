import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glucose-control',
  templateUrl: './glucose-control.page.html',
  styleUrls: ['./glucose-control.page.scss'],
})
export class GlucoseControlPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  navigateToGlucosaHistory() {
    this.router.navigate(['home/glucose-log']);
  }
  navigateToRegistroGlucosa() {
    this.router.navigate(['home/glucose-history']);
  }

}
