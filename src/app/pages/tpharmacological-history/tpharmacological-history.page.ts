import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../services/treatment.service';
import {ToastService} from '../../services/toast.service';


@Component({
  selector: 'app-tpharmacological-history',
  templateUrl: './tpharmacological-history.page.html',
  styleUrls: ['./tpharmacological-history.page.scss'],
})
export class TPharmacologicalHistoryPage implements OnInit {

  cardDataTreatment: any;

  constructor(private treatmentService: TreatmentService, private toastService: ToastService) { }

  ngOnInit() {
    this.getTreatmentHistory();
  }

  ionViewDidEnter(){
    this.getTreatmentHistory();
  }
  getTreatmentHistory() {
    this.treatmentService.treatmentHistory().subscribe((res: any) => {
      this.cardDataTreatment = res.data;
      console.log(this.cardDataTreatment);
    },
    (err: any)=>{
      console.log(err);
      const messageError = err.error.message;
      this.toastService.presentToast(messageError);
    });
  }

}
