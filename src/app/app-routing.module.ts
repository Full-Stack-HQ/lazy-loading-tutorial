import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageInventoryGuard } from './guards/manage-inventory.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(mod => mod.StaffModule),
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then(mod => mod.InventoryModule),
    canLoad: [ManageInventoryGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
