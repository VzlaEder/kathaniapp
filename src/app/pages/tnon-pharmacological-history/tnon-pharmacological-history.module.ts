import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TNonPharmacologicalHistoryPageRoutingModule } from './tnon-pharmacological-history-routing.module';

import { TNonPharmacologicalHistoryPage } from './tnon-pharmacological-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TNonPharmacologicalHistoryPageRoutingModule
  ],
  declarations: [TNonPharmacologicalHistoryPage]
})
export class TNonPharmacologicalHistoryPageModule {}
