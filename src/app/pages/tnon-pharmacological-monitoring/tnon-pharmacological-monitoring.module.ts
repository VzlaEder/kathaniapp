import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TNonPharmacologicalMonitoringPageRoutingModule } from './tnon-pharmacological-monitoring-routing.module';

import { TNonPharmacologicalMonitoringPage } from './tnon-pharmacological-monitoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TNonPharmacologicalMonitoringPageRoutingModule
  ],
  declarations: [TNonPharmacologicalMonitoringPage]
})
export class TNonPharmacologicalMonitoringPageModule {}
