import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { TreatmentService } from '../../services/treatment.service'
import {ToastService} from '../../services/toast.service'


@Component({
  selector: 'app-tpharmacological-history',
  templateUrl: './tpharmacological-history.page.html',
  styleUrls: ['./tpharmacological-history.page.scss'],
})
export class TPharmacologicalHistoryPage implements OnInit {

  cardDataTreatment: any;

  constructor(private treatmentService: TreatmentService, private toastService:ToastService) { }

  ngOnInit() {
    this.getTreatmentHistory()
  }

  getTreatmentHistory() {
    this.treatmentService.treatmentHistory().subscribe((res: any) => {
      console.log(res)
      this.cardDataTreatment = res.data;
      console.log(this.cardDataTreatment)
    },
    (HttpErrorResponse:any)=>{
      console.log(HttpErrorResponse)
      let messageError = HttpErrorResponse.error.message
      this.toastService.presentToast(messageError)
    })
  }

}
