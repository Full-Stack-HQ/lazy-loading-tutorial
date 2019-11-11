import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: 'reports',
    component: ReportComponent,
  },
  {
    path: ':id',
    component: StaffDetailsComponent,
  },
  {
    path: '',
    component: StaffListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
