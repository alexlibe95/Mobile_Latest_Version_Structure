import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointLogPage } from './point-log.page';

const routes: Routes = [
  {
    path: '',
    component: PointLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PointLogPageRoutingModule {}
