import { FormControl } from '@angular/forms';

export interface ProductsFilter {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  minPrice: FormControl<number | null>;
  maxPrice: FormControl<number | null>;
}
