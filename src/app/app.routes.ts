import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { LoginPage } from './pages/auth/login.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'catalog',
    component: Catalog,
  },
  { path: 'login', component: LoginPage },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart').then((m) => m.Cart),
  },
];
