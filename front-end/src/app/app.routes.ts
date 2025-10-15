import { Routes } from '@angular/router';
import { ListProducts } from '@components/list-products/list-products';

export const routes: Routes = [
  { path: '', component: ListProducts },
  { path: '**', redirectTo: '' },
];
