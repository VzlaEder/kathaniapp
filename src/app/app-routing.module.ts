import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Noauthenticated } from './guards/Noauthenticated.guard';
import { Authenticated } from './guards/Authenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule),
    canActivate: [Noauthenticated]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
