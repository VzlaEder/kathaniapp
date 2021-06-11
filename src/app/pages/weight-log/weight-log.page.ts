import { Component, OnInit } from '@angular/core';
import { WeightService } from '../../services/weight.service'
import {ToastService} from '../../services/toast.service'

@Component({
  selector: 'app-weight-log',
  templateUrl: './weight-log.page.html',
  styleUrls: ['./weight-log.page.scss'],
})
export class WeightLogPage implements OnInit {

  public postWeigthData = {
    peso: null,
    fecha: null,
    hora: null
  }

  constructor(private weightService:WeightService, private toastService:ToastService) { }

  ngOnInit() {
  }

  weight(){
    this.weightService.weightUP(this.postWeigthData).subscribe(res=>{
    },
    (HttpErrorResponse: any)=>{
      let messageError = HttpErrorResponse.error.message
      this.toastService.presentToast(messageError)
    })
  }
}
