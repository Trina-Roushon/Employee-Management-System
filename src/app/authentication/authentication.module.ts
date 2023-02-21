import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from '../employee/add-employee/add-employee.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmployeeListComponent,
   // AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AuthenticationModule { }
