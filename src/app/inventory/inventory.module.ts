import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { OrderInventoryItemsComponent } from './order-inventory-items/order-inventory-items.component';
@NgModule({
  declarations: [InventoryListComponent, OrderInventoryItemsComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
