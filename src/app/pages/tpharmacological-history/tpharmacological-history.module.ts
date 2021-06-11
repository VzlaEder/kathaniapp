import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPharmacologicalHistoryPageRoutingModule } from './tpharmacological-history-routing.module';

import { TPharmacologicalHistoryPage } from './tpharmacological-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPharmacologicalHistoryPageRoutingModule
  ],
  declarations: [TPharmacologicalHistoryPage]
})
export class TPharmacologicalHistoryPageModule {}
