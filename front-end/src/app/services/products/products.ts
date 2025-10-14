import { Injectable } from '@angular/core';
import { ProductDto } from '@models/dtos/produt';

@Injectable({
  providedIn: 'root'
})
export class Products {
  public async getProducts() : Promise<ProductDto[]> {
    return Promise.resolve([]);
  }
  public async createProducts() : Promise<void> {
    return Promise.resolve();
  }
  public async editProducts() : Promise<void> {
    return Promise.resolve();
  }
  public async deleteProducts() : Promise<void> {
    return Promise.resolve();
  }
}
