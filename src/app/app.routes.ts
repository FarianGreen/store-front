import { Routes } from '@angular/router';
import { Catalog } from './features/catalog/pages/catalog';

export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./home/home.component').then((m) => m.HomeComponent),
//   },
  {
    path: 'catalog',
    component: Catalog,
  },
];
