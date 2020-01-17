import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherUsedPageRoutingModule } from './voucher-used-routing.module';

import { VoucherUsedPage } from './voucher-used.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherUsedPageRoutingModule
  ],
  declarations: [VoucherUsedPage]
})
export class VoucherUsedPageModule {}
