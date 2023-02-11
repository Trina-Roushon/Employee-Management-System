import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
//import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<any> {
  constructor(
    //private employeeService: EmployeeService
    ) {}

  resolve() {
    //return this.employeeService.getEmployeeList();
  }
}
