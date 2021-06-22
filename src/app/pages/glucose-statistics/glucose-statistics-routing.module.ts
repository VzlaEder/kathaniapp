import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucoseStatisticsPage } from './glucose-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: GlucoseStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucoseStatisticsPageRoutingModule {}
