import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightControlPage } from './weight-control.page';

const routes: Routes = [
  {
    path: '',
    component: WeightControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightControlPageRoutingModule {}
