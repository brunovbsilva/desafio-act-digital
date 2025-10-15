import { Routes } from '@angular/router';
import { ListProducts } from '@components/list-products/list-products';

export const routes: Routes = [
  { path: 'products', component: ListProducts },
  { path: '**', redirectTo: 'products' },
];
