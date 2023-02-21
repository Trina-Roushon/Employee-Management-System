import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule}  from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from 'src/Services/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeResolver } from './employee/employee-resolver/employee-resolver.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    DataTablesModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    //   }
    // ]),
  ],
  providers: [EmployeeService, EmployeeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
