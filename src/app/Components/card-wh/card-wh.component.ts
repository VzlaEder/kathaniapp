import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service'

@Component({
  selector: 'app-card-wh',
  templateUrl: './card-wh.component.html',
  styleUrls: ['./card-wh.component.scss'],
})
export class CardWhComponent implements OnInit {

  cardDataW: any;

  constructor(private weightService: WeightService) { }

  ngOnInit() {
    this.weightService.weightH.subscribe(res=>{
      this.cardDataW = res;
    })
  }

}
