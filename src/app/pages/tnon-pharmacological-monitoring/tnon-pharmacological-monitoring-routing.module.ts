import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TNonPharmacologicalMonitoringPage } from './tnon-pharmacological-monitoring.page';

const routes: Routes = [
  {
    path: '',
    component: TNonPharmacologicalMonitoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TNonPharmacologicalMonitoringPageRoutingModule {}
