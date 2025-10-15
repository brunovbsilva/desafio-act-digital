import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductDto } from '@models/dtos/produt';
import { ProductsService } from '@services/products/products-service';
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from '@angular/common';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { EditProductForm } from '@components/list-products/edit-product-form';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { EditProduct } from '@models/forms/edit-product';
import { CreateProductForm } from '@components/list-products/create-product-form';
import { CreateProduct } from '@models/forms/create-product';
import { ListProductsHeader } from '@components/list-products/list-products-header/list-products-header';
import { GetProductsRequest } from '@models/requests/get-products-request';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-list-products',
  imports: [
    TableModule,
    CurrencyPipe,
    Button,
    Dialog,
    ReactiveFormsModule,
    InputText,
    InputNumber,
    ListProductsHeader,
    FloatLabel,
  ],
  templateUrl: './list-products.html',
  styleUrl: './list-products.scss',
})
export class ListProducts implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly editForm = new EditProductForm();
  protected editForm$ = this.editForm as FormGroup<EditProduct>;
  private readonly createForm = new CreateProductForm();
  protected createForm$ = this.createForm as FormGroup<CreateProduct>;

  protected products = signal<ProductDto[]>([]);
  visibleEdit = signal<boolean>(false);
  visibleCreate = signal<boolean>(false);

  async ngOnInit(): Promise<void> {
    await this.setProducts();
  }

  protected async setProducts(request: GetProductsRequest | undefined = undefined) {
    this.products.set(await this.productsService.getProducts(request ?? {}));
  }

  protected async deleteProduct(id: string) {
    await this.productsService
      .deleteProduct(id)
      .then(() => this.products.update((x) => x.filter((y) => y.id !== id)));
  }

  protected openDialogEdit(product: ProductDto) {
    this.editForm.setValues(product);
    this.visibleEdit.set(true);
  }

  protected async editProduct() {
    const product = this.editForm.getValues();
    await this.productsService
      .editProducts(product)
      .then(() => {
        this.products.update((x) => {
          const productIndex = x.findIndex((y) => y.id == product.id);
          x[productIndex] = product;
          return x;
        });
      })
      .finally(() => this.visibleEdit.set(false));
  }

  protected openDialogCreate() {
    this.visibleCreate.set(true);
  }

  protected async createProduct() {
    const product = this.createForm.getValues();
    await this.productsService
      .createProducts(product)
      .then(async () => await this.setProducts())
      .finally(() => this.visibleCreate.set(false));
  }
}
