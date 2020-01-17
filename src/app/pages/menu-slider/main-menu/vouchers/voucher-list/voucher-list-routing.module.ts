import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoucherListPage } from './voucher-list.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoucherListPageRoutingModule {}
