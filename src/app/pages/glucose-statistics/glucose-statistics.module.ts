import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlucoseStatisticsPageRoutingModule } from './glucose-statistics-routing.module';

import { GlucoseStatisticsPage } from './glucose-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlucoseStatisticsPageRoutingModule
  ],
  declarations: [GlucoseStatisticsPage]
})
export class GlucoseStatisticsPageModule {}
