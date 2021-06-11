import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToast(inforMessage) {
    const toast = await this.toastController.create({
      message: inforMessage,
      duration: 2000
    });
    toast.present();
  }

}
