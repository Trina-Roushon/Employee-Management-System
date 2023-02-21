import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    MatTableModule
  ]
})
export class EmployeeModule { }
