import { Component, OnInit } from '@angular/core';
import { GlucoseService } from '../../services/glucose.service';

@Component({
  selector: 'app-card-gh',
  templateUrl: './card-gh.component.html',
  styleUrls: ['./card-gh.component.scss'],
})
export class CardGhComponent implements OnInit {

  cardDataG: any;

  constructor(private glucoseService: GlucoseService) { }

  ngOnInit() {
    this.glucoseService.glucoseH.subscribe(res=>{
      this.cardDataG = res;
    });
  }

  color(val: number) {

    if(val<70 || val>125){
      return 'danger';
    }else if( val >= 101 && val <= 125){
      return 'warning';
    }
    return 'success';
    }

    placeholder(val: number) {

    if(val<70 || val>125){
      return 'Riesgo alto';
    }else if( val >= 101 && val <= 125){
      return 'Riesgo leve';
    }
    return 'Sin riesgos';
    }

  }

