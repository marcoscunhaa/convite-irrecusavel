import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/autenticacao',
    pathMatch: 'full'
  },
  {
    path: 'autenticacao',
    component: ConfirmComponent
  },
  {
    path: 'convite',
    component: HomeComponent
  }
];
