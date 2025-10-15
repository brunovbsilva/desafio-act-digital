import { Component, output } from '@angular/core';
import { Card } from 'primeng/card';
import { GetProductsRequest } from '@models/requests/get-products-request';
import { Button } from 'primeng/button';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsFilterForm } from '@components/list-products/list-products-header/products-filter-form';
import { ProductsFilter } from '@models/forms/products-filter';
import { InputNumber } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-list-products-header',
  imports: [Card, Button, ReactiveFormsModule, InputNumber, InputText, FloatLabel],
  templateUrl: './list-products-header.html',
  styleUrl: './list-products-header.scss',
})
export class ListProductsHeader {
  private form = new ProductsFilterForm();
  protected form$ = this.form as FormGroup<ProductsFilter>;
  createClicked = output();
  filter = output<GetProductsRequest>();

  protected emitFilter() {
    const filterValue = this.form.getValues();
    console.log(filterValue);
    this.filter.emit(filterValue);
  }
}
