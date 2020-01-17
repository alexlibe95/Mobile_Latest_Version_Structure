import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherUsedPage } from './voucher-used.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherUsedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherUsedPageRoutingModule {}
