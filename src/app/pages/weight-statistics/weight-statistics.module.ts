import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightStatisticsPageRoutingModule } from './weight-statistics-routing.module';

import { WeightStatisticsPage } from './weight-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightStatisticsPageRoutingModule
  ],
  declarations: [WeightStatisticsPage]
})
export class WeightStatisticsPageModule {}
