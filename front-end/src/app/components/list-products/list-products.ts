import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '@services/products/products-service';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.html',
  styleUrl: './list-products.scss',
})
export class ListProducts implements OnInit {
  private readonly productsService = inject(ProductsService);

  async ngOnInit(): Promise<void> {
    const products = await this.productsService.getProducts({});
    console.log(products);
  }
}
