import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDto } from '@models/dtos/produt';
import { CreateProduct } from '@models/forms/create-product';

export class CreateProductForm extends FormGroup<CreateProduct> {
  constructor() {
    super({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      price: new FormControl(0, [Validators.min(1)]),
    });
  }

  public getValues() : ProductDto {
    console.log(this.value);
    return {
      id: "",
      name: this.controls.name.value!,
      description: this.controls.description.value!,
      price: this.controls.price.value!,
    }
  }
}
