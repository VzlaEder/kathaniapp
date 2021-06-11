import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPharmacologicalMonitoringPage } from './tpharmacological-monitoring.page';

const routes: Routes = [
  {
    path: '',
    component: TPharmacologicalMonitoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPharmacologicalMonitoringPageRoutingModule {}
