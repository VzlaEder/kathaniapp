import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../services/treatment.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tpharmacological-monitoring',
  templateUrl: './tpharmacological-monitoring.page.html',
  styleUrls: ['./tpharmacological-monitoring.page.scss'],
})
export class TPharmacologicalMonitoringPage implements OnInit {

  cardDataTreatment: any;

  constructor(private router: Router, private treatmentService: TreatmentService, private toastService: ToastService) { }

  ngOnInit() {
    this.getTreatmentList();
  }


  ionViewDidEnter(){
    this.getTreatmentList();
  }

  getTreatmentList() {
    this.treatmentService.treatmentList().subscribe((res: any) => {
      this.cardDataTreatment = res.data;
      console.log(this.cardDataTreatment);
    });
  }


  postTreatmentId(treatmentfollowup: any){
    console.log(treatmentfollowup);
    const data = {
      patient_treatment_id: treatmentfollowup.id
    };
    console.log(data);
    this.treatmentService.treatmentRegID(data).subscribe((res: any) => {
      const messageSuccess = res.message;
      this.toastService.presentToast(messageSuccess);
      const index = this.cardDataTreatment.indexOf(treatmentfollowup);
      this.cardDataTreatment.splice(index, 1);
      console.log(res);
    },
      (err: any) => {
        console.log(err);
        const messageError = err.error.message;
        this.toastService.presentToast(messageError);
      }
    );
  }

}
