import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderInventoryItemsComponent } from './order-inventory-items/order-inventory-items.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

const routes: Routes = [
  {
    path: 'order',
    component: OrderInventoryItemsComponent,
  },
  {
    path: '',
    component: InventoryListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
