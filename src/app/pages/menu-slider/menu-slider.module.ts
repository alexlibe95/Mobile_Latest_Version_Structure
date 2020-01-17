import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSliderPageRoutingModule } from './menu-slider-routing.module';

import { MenuSliderPage } from './menu-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSliderPageRoutingModule
  ],
  declarations: [MenuSliderPage]
})
export class MenuSliderPageModule {}
