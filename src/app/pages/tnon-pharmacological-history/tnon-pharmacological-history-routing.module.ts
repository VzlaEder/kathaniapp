import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TNonPharmacologicalHistoryPage } from './tnon-pharmacological-history.page';

const routes: Routes = [
  {
    path: '',
    component: TNonPharmacologicalHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TNonPharmacologicalHistoryPageRoutingModule {}
