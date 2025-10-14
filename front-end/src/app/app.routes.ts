import { Routes } from '@angular/router';
import { ListProducts } from './components/list-products/list-products';
import { CreateProduct } from './components/create-product/create-product';
import { EditProduct } from './components/edit-product/edit-product';

export const routes: Routes = [
  { path: 'products', component: ListProducts },
  { path: 'products/create', component: CreateProduct },
  { path: 'products/:id', component: EditProduct },
  { path: '**', redirectTo: 'products' }
];
