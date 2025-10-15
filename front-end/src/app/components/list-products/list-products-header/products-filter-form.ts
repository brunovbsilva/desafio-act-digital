import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsFilter } from '@models/forms/products-filter';
import { GetProductsRequest } from '@models/requests/get-products-request';

export class ProductsFilterForm extends FormGroup<ProductsFilter> {
  constructor() {
    super({
      name: new FormControl(""),
      description: new FormControl(""),
      minPrice: new FormControl(0, [Validators.min(0)]),
      maxPrice: new FormControl(0, [Validators.min(0)]),
    });
  }

  public getValues() : GetProductsRequest {
    return {
      name: this.controls.name.value!,
      description: this.controls.description.value!,
      minPrice: this.controls.minPrice.value!,
      maxPrice: this.controls.maxPrice.value!,
    };
  }
}
