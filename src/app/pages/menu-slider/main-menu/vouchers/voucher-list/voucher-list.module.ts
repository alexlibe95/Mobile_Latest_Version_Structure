import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoucherListPageRoutingModule } from './voucher-list-routing.module';

import { VoucherListPage } from './voucher-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherListPageRoutingModule
  ],
  declarations: [VoucherListPage]
})
export class VoucherListPageModule {}
