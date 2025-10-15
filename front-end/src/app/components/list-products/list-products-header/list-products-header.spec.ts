import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsHeader } from './list-products-header';

describe('ListProductsHeader', () => {
  let component: ListProductsHeader;
  let fixture: ComponentFixture<ListProductsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
