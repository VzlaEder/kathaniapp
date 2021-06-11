import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlucoseControlPageRoutingModule } from './glucose-control-routing.module';

import { GlucoseControlPage } from './glucose-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlucoseControlPageRoutingModule
  ],
  declarations: [GlucoseControlPage]
})
export class GlucoseControlPageModule {}
