import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPharmacologicalMonitoringPageRoutingModule } from './tpharmacological-monitoring-routing.module';

import { TPharmacologicalMonitoringPage } from './tpharmacological-monitoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPharmacologicalMonitoringPageRoutingModule
  ],
  declarations: [TPharmacologicalMonitoringPage]
})
export class TPharmacologicalMonitoringPageModule {}
