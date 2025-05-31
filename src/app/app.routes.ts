import { Routes } from '@angular/router';
import { Catalog } from './features/catalog/catalog';
import { LoginPage } from './features/auth/login.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'catalog',
    component: Catalog,
  },
  { path: 'login', component: LoginPage },
];
