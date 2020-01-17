import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PointLogPageRoutingModule } from './point-log-routing.module';

import { PointLogPage } from './point-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PointLogPageRoutingModule
  ],
  declarations: [PointLogPage]
})
export class PointLogPageModule {}
