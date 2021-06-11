import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightControlPageRoutingModule } from './weight-control-routing.module';

import { WeightControlPage } from './weight-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightControlPageRoutingModule
  ],
  declarations: [WeightControlPage]
})
export class WeightControlPageModule {}
