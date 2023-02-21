import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/Services/employee/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<Observable<Employee[]>> {
  constructor(private employeeService: EmployeeService) { }

  resolve(route: ActivatedRouteSnapshot ,state: RouterStateSnapshot) : Observable<Employee[]> {
    return this.employeeService.getEmployees();
  }
}
