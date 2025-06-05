import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog-page/catalog-page.component';
import { LoginPage } from './pages/auth-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then((m) => m.Home),
  },
  {
    path: 'catalog',
    component: Catalog,
  },
  { path: 'login', component: LoginPage },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart-page/cart-page.componet').then((m) => m.Cart),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/preorder-page/preorder-page.component').then((m) => m.PreorderPage),
  },
];
