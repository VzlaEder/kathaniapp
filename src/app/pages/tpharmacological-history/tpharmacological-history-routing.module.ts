import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPharmacologicalHistoryPage } from './tpharmacological-history.page';

const routes: Routes = [
  {
    path: '',
    component: TPharmacologicalHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPharmacologicalHistoryPageRoutingModule {}
