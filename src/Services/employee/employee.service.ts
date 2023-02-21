import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addEmployee(arg0: { employee: import("src/app/models/employee.model").EmployeeState; }) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'https://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(`${this.baseUrl}/employees`)
      .pipe(map((response: any) => response));
  }
}
