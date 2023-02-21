import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  selectedTabIndex: any;
  employeeForm: FormGroup;
  maxDob!: Date;
  Loaded = false;
  employees: Employee[] = [];
  dataSource: any;
  displayedColumns: string[] = [
    'id',
    'employee_name',
    'employee_salary',
    'employee_age',
    'profile_image'
  ];
  constructor(
    public route: ActivatedRoute,
    private store: Store, 
    private fb: FormBuilder,
    public router: Router) {
    var list = this.route.snapshot.data['data'].data;
    if (list) {
      for (var i = 0; i < list.length; i++) {
        // get inner array
        var vals = list[i];
        this.employees.push(vals);
        this.dataSource = this.employees;
      }
      console.log(this.employees, 'resolverOneData');
    }
    const today = new Date();
    this.maxDob = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      gender: ['', Validators.required],
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      skillLevel: ['', Validators.required]
    });
  }


  // this.basicInfoForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   dateOfBirth: ['', Validators.required],
  //   phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
  //   gender: ['', Validators.required]
  // });

  // this.skillsForm = this.fb.group({
  //   skillName: ['', Validators.required],
  //   experience: ['', Validators.required],
  //   skillLevel: ['', Validators.required]
  // });

  
  ngOnInit() {
  }
  clickEvent() {
    this.router.navigate(['addEmployeeList']);
  }
}