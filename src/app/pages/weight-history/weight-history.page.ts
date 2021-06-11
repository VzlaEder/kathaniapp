import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service'

@Component({
  selector: 'app-weight-history',
  templateUrl: './weight-history.page.html',
  styleUrls: ['./weight-history.page.scss'],
})
export class WeightHistoryPage implements OnInit {

  constructor(private weightService: WeightService) { }

  ngOnInit() {
    this.getWeihtHistory()
  }

  getWeihtHistory(){
    this.weightService.weightHistory().subscribe((res:any)=>{
      console.log(res.data)

      this.weightService.changeWeightHistory(res.data)
    })
  }


  
}
