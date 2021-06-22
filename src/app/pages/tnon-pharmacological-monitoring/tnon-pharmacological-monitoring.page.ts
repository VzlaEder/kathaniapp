import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { NotreatmentService } from '../../services/notreatment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tnon-pharmacological-monitoring',
  templateUrl: './tnon-pharmacological-monitoring.page.html',
  styleUrls: ['./tnon-pharmacological-monitoring.page.scss'],
})
export class TNonPharmacologicalMonitoringPage implements OnInit {

  datosMember = JSON.parse(localStorage.getItem('member'));

  cardDataTreatment: any;

  loading: boolean;

  constructor(private toastService: ToastService, private notreatmentService: NotreatmentService) { }

  ngOnInit() {
    this.getTreatmentList();
  }

  ionViewDidEnter(){
    this.getTreatmentList();
  }

  getTreatmentList(){
    this.notreatmentService.treatmentNoList().subscribe((res: any) => {
      this.cardDataTreatment = res.data;
      console.log(this.cardDataTreatment);
      }
    );
  }
  postTreatmentId(treatmentfollowup: any){
    const data = {
      activity_treatment_id: treatmentfollowup.id
    };
    this.loading = true;
    this.notreatmentService.treatmentNoRegID(data).subscribe((res: any) => {
      const messageSuccess = res.message;
      this.toastService.presentToast(messageSuccess);
      const index = this.cardDataTreatment.indexOf(treatmentfollowup);
      this.cardDataTreatment.splice(index, 1);
      this.loading = false;
    },
      (err: any) => {
        this.loading = false;
        const messageError = err.error.message;
        this.toastService.presentToast(messageError);
      });
  }
}







