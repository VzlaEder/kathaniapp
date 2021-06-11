import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlidesComponent} from './slides/slides.component';
import {LogoComponent} from './logo/logo.component';
import {StartButtonComponent} from './start-button/start-button.component';
import {FormsModule} from '@angular/forms';
import {TabsComponent} from './tabs/tabs.component'
import {CardGhComponent} from './card-gh/card-gh.component'
import {CardWhComponent} from './card-wh/card-wh.component'


import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SlidesComponent,LogoComponent,StartButtonComponent, TabsComponent, CardGhComponent, CardWhComponent],
  exports:[SlidesComponent,LogoComponent,StartButtonComponent,TabsComponent, CardGhComponent, CardWhComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
