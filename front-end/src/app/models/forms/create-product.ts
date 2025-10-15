import { FormControl } from '@angular/forms';

export interface CreateProduct {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  price: FormControl<number | null>;
}
