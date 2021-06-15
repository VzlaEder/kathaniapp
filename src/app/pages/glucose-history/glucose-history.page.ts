import { Component, OnInit } from '@angular/core';
import { GlucoseService } from '../../services/glucose.service';

@Component({
  selector: 'app-glucose-history',
  templateUrl: './glucose-history.page.html',
  styleUrls: ['./glucose-history.page.scss'],
})
export class GlucoseHistoryPage implements OnInit {


  constructor(private glucoseService: GlucoseService) {}

  ngOnInit() {}

  ionViewDidEnter(){
    this.getGlucoseHistory();
  }


  getGlucoseHistory(){
    this.glucoseService.glucoseHistory().subscribe((res: any) =>{
      console.log(res.data);
      this.glucoseService.changeGlucoseHistory(res.data);
    });
  }

}
