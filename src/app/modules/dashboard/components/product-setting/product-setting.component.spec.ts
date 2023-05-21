import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSettingComponent } from './product-setting.component';

describe('ProductSettingComponent', () => {
  let component: ProductSettingComponent;
  let fixture: ComponentFixture<ProductSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSettingComponent]
    });
    fixture = TestBed.createComponent(ProductSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
