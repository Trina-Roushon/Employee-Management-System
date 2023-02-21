import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../employee/add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { EmployeeResolver } from '../employee/employee-resolver/employee-resolver.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'employeeList', component: EmployeeListComponent, 
  resolve: {
    data: EmployeeResolver
  },
  children: [
    {
      path: '',
      loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule),
      data: { title: 'List', titleI18n: 'List' },
    },
  ]

},
  //{ path: 'employeeList/addEmployeeList', component: AddEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
