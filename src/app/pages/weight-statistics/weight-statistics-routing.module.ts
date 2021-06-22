import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightStatisticsPage } from './weight-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: WeightStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightStatisticsPageRoutingModule {}
