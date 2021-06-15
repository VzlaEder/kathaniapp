import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service';

@Component({
  selector: 'app-card-wh',
  templateUrl: './card-wh.component.html',
  styleUrls: ['./card-wh.component.scss'],
})
export class CardWhComponent implements OnInit {

  cardDataW: any;

  datosMember = JSON.parse(localStorage.getItem('member'));

  constructor(private weightService: WeightService) {}

  ngOnInit() {
    this.weightService.weightH.subscribe(res=>{
      this.cardDataW = res;
    });
  }

  color(val: number) {
    if(val<18.5 || val>30.0){
      return 'danger';
    }else if( val >= 25.0 && val <= 29.9){
      return 'warning';
    }
    return 'success';
    }

    bodyCondition(val: number){
      if(val<18.5){
        return 'Desnutrición';
      }else if(val>=18.5 && val<=24.9){
        return 'Peso Normal';
      }else if(val>=25.0 && val<=29.9){
        return 'Sobrepeso';
      }else{
        return 'Obesidad';
      }
    }

    idealw(val: number) {

      if(val<18.5 || val>30.0){
        return 'Riesgo alto';
      }else if( val >= 25.0 && val <= 29.9){
        return 'Riesgo leve';
      }
      return 'Sin riesgos';
      }
}
