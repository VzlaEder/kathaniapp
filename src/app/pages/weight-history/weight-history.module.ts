import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../Components/components.module'

import { IonicModule } from '@ionic/angular';

import { WeightHistoryPageRoutingModule } from './weight-history-routing.module';

import { WeightHistoryPage } from './weight-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightHistoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeightHistoryPage]
})
export class WeightHistoryPageModule {}
