import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../services/treatment.service'
import { ToastService } from '../../services/toast.service'



@Component({
  selector: 'app-tpharmacological-monitoring',
  templateUrl: './tpharmacological-monitoring.page.html',
  styleUrls: ['./tpharmacological-monitoring.page.scss'],
})
export class TPharmacologicalMonitoringPage implements OnInit {

  
  constructor(private treatmentService: TreatmentService, private toastService:ToastService) { }

  cardDataTreatment: any;

  ngOnInit() {
    this.getTreatmentList();
  }

  getTreatmentList() {
    this.treatmentService.treatmentList().subscribe((res: any) => {
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
    this.treatmentService.treatmentRegID(data).subscribe((res: any) => {
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
