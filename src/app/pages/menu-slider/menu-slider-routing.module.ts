import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSliderPage } from './menu-slider.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSliderPage
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSliderPageRoutingModule {}
