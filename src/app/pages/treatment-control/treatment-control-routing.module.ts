import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatmentControlPage } from './treatment-control.page';

const routes: Routes = [
  {
    path: '',
    component: TreatmentControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentControlPageRoutingModule {}
