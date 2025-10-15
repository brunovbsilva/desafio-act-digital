import { FormControl } from '@angular/forms';

export interface EditProduct {
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  price: FormControl<number | null>;
}
