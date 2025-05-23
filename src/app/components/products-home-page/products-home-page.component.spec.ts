import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHomePageComponent } from './products-home-page.component';

describe('ProductsHomePageComponent', () => {
  let component: ProductsHomePageComponent;
  let fixture: ComponentFixture<ProductsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
