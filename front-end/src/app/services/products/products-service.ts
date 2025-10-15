import { Injectable } from '@angular/core';
import { ProductDto } from '@models/dtos/produt';
import { GetProductsRequest } from '@models/requests/get-products-request';
import { BaseService } from '@services/base.service';
import { ErrorResponse } from '@models/error-response';
import { QueryStringHelper } from '@helpers/query-string.helper';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  constructor() {
    super('http://localhost:5000', 'products');
  }

  public async getProducts(request: GetProductsRequest): Promise<ProductDto[]> {
    return await this.GetAsync<ProductDto[]>('', request);
  }
  public async createProducts(product: ProductDto): Promise<void> {
    return await this.PostAsync<void>('', product);
  }
  public async editProducts(product: ProductDto): Promise<void> {
    return await this.PatchAsync(product.id, product);
  }
  public async deleteProduct(id: string): Promise<void> {
    return await this.DeleteAsync(id);
  }
}
