import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { NotreatmentService } from '../../services/notreatment.service'

@Component({
  selector: 'app-tnon-pharmacological-history',
  templateUrl: './tnon-pharmacological-history.page.html',
  styleUrls: ['./tnon-pharmacological-history.page.scss'],
})
export class TNonPharmacologicalHistoryPage implements OnInit {

  cardDataTreatment: any;

  constructor(private notreatmentService:NotreatmentService, private toastService:ToastService) { }

  ngOnInit() {
    this.getTreatmentNonHistory();
  }

  getTreatmentNonHistory() {
    this.notreatmentService.treatmentNoHistory().subscribe((res:any)=>{
      this.cardDataTreatment = res.data;
      console.log(this.cardDataTreatment);
    },
    (HttpErrorResponse:any)=>{
      console.log(HttpErrorResponse);
      let messageError = HttpErrorResponse.error.message;
      this.toastService.presentToast(messageError);
    });
  }
  datosMember = JSON.parse(localStorage.getItem('member'));
}
