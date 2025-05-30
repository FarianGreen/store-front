import { Routes } from '@angular/router';
import { Catalog } from './features/catalog/catalog';

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
];
