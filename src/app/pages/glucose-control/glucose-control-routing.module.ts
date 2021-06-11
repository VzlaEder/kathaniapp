import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlucoseControlPage } from './glucose-control.page';

const routes: Routes = [
  {
    path: '',
    component: GlucoseControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucoseControlPageRoutingModule {}
