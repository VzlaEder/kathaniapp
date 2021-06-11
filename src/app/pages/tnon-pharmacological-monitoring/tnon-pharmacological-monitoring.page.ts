import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service'
import { NotreatmentService } from '../../services/notreatment.service'

@Component({
  selector: 'app-tnon-pharmacological-monitoring',
  templateUrl: './tnon-pharmacological-monitoring.page.html',
  styleUrls: ['./tnon-pharmacological-monitoring.page.scss'],
})
export class TNonPharmacologicalMonitoringPage implements OnInit {

  constructor(private toastService:ToastService, private notreatmentService:NotreatmentService) { }

  cardDataTreatment: any;

  ngOnInit() {
  }

  getTreatmentList() {
    this.notreatmentService.treatmentNoList().subscribe((res: any) => {
      this.cardDataTreatment = res.data;
      console.log(this.cardDataTreatment)
    })
  }

  postTreatmentId(treatmentfollowup: any){
    console.log(treatmentfollowup)
    var data = {
      patient_treatment_id: treatmentfollowup.id
    }
    console.log(data)
    this.notreatmentService.treatmentNoRegID(data).subscribe((res: any) => {
      console.log(res)
    },
      (HttpErrorResponse: any) => {
        console.log(HttpErrorResponse)
        let messageError = HttpErrorResponse.error.message
        this.toastService.presentToast(messageError)
      }
    )
  }

}
