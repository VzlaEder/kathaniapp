import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GlucoseService} from '../../services/glucose.service';
import {ToastService} from '../../services/toast.service';
import {glucoseI} from '../../models/glusose.interface';



@Component({
  selector: 'app-glucose-log',
  templateUrl: './glucose-log.page.html',
  styleUrls: ['./glucose-log.page.scss'],
})
export class GlucoseLogPage implements OnInit {

  public postGlucoseData = {
    nivel_glusemia: null,
    fecha: null,
    hora: null,
    comida:''
  };

  constructor(private router: Router, private glucoseService: GlucoseService, private toastService: ToastService ) {}

  ngOnInit() {}

  glucoseDataUP(){
      this.glucoseService.glucoseUP(this.postGlucoseData).subscribe((res: any) =>{
        console.log(res);
        const messageSuccess = res.message;
        this.toastService.presentToast(messageSuccess);
      },
      (err: any)=>{
        console.log(err);
        const messageError = err.error.message;
        this.toastService.presentToast(messageError);
      }
    );
  }
}
