import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightHistoryPage } from './weight-history.page';

const routes: Routes = [
  {
    path: '',
    component: WeightHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightHistoryPageRoutingModule {}
