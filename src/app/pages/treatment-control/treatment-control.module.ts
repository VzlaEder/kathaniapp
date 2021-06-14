import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ComponentsModule} from '../../Components/components.module';


import { IonicModule } from '@ionic/angular';

import { TreatmentControlPageRoutingModule } from './treatment-control-routing.module';

import { TreatmentControlPage } from './treatment-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreatmentControlPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TreatmentControlPage]
})
export class TreatmentControlPageModule {}
