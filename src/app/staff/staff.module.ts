import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffListComponent } from '../staff/staff-list/staff-list.component';
import { StaffDetailsComponent } from '../staff/staff-details/staff-details.component';
import { ReportComponent } from '../staff/report/report.component';

@NgModule({
  declarations: [StaffListComponent, StaffDetailsComponent, ReportComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
