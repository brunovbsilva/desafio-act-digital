import { Injectable } from '@angular/core';
import { ProductDto } from '@models/dtos/produt';
import { GetProductsRequest } from '@models/requests/get-products-request';
import { BaseService } from '@services/base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  constructor() {
    super('http://localhost:5000', 'products');
  }

  public async getProducts(request: GetProductsRequest): Promise<ProductDto[]> {
    return await this.GetAsync('', request);
  }
  public async createProducts(): Promise<void> {
    return Promise.resolve();
  }
  public async editProducts(): Promise<void> {
    return Promise.resolve();
  }
  public async deleteProducts(): Promise<void> {
    return Promise.resolve();
  }
}
