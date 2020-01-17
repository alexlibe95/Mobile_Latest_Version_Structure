import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VouchersPage } from './vouchers.page';

const routes: Routes = [
  {
    path: '',
    component: VouchersPage
  },
  {
    path: 'voucher-list',
    loadChildren: () => import('./voucher-list/voucher-list.module').then( m => m.VoucherListPageModule)
  },
  {
    path: 'voucher-used',
    loadChildren: () => import('./voucher-used/voucher-used.module').then( m => m.VoucherUsedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VouchersPageRoutingModule {}
