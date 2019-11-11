import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInventoryItemsComponent } from './order-inventory-items.component';

describe('OrderInventoryItemsComponent', () => {
  let component: OrderInventoryItemsComponent;
  let fixture: ComponentFixture<OrderInventoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInventoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
