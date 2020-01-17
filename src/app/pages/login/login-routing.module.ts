import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'login-mobile',
    loadChildren: () => import('./login-mobile/login-mobile.module').then( m => m.LoginMobilePageModule)
  },
  {
    path: 'login-code',
    loadChildren: () => import('./login-code/login-code.module').then( m => m.LoginCodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
