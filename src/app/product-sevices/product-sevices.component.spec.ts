import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSevicesComponent } from './product-sevices.component';

describe('ProductSevicesComponent', () => {
  let component: ProductSevicesComponent;
  let fixture: ComponentFixture<ProductSevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
