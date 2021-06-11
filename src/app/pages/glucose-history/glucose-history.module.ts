import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from './../../components/components.module';


import { GlucoseHistoryPageRoutingModule } from './glucose-history-routing.module';
import { GlucoseHistoryPage } from './glucose-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlucoseHistoryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GlucoseHistoryPage]
})
export class GlucoseHistoryPageModule {}
