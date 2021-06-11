import { Component, OnInit } from '@angular/core';
import { GlucoseService } from '../../services/glucose.service'

@Component({
  selector: 'app-card-gh',
  templateUrl: './card-gh.component.html',
  styleUrls: ['./card-gh.component.scss'],
})
export class CardGhComponent implements OnInit {

  cardDataG: any;

  constructor(private glucoseService:GlucoseService) { }

  ngOnInit() {
    this.glucoseService.glucoseH.subscribe(res=>{
      this.cardDataG = res;
    })

    console.log(this.cardDataG)
  }


}
