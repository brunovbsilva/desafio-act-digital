import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditProduct } from '@models/forms/edit-product';
import { ProductDto } from '@models/dtos/produt';

export class EditProductForm extends FormGroup<EditProduct> {
  constructor() {
    super({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      price: new FormControl(0, [Validators.min(1)]),
    });
  }

  public setValues(product: ProductDto) {
    this.controls.id.setValue(product.id);
    this.controls.name.setValue(product.name);
    this.controls.description.setValue(product.description);
    this.controls.price.setValue(product.price);
  }

  public getValues() : ProductDto {
    return {
      id: this.controls.id.value!,
      name: this.controls.name.value!,
      description: this.controls.description.value!,
      price: this.controls.price.value!,
    }
  }
}
