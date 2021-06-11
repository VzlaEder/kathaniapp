import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucoseHistoryPage } from './glucose-history.page';

const routes: Routes = [
  {
    path: '',
    component: GlucoseHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucoseHistoryPageRoutingModule {}
