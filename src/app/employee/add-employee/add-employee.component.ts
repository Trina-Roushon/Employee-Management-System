import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Employee, EmployeeState } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/Services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  basicInfoForm: any;
  skillsForm: any;
  preview: any;
  selectedTabIndex: any;
  maxDob!: Date;


  constructor(private _employeeService: EmployeeService, private fb: FormBuilder) {

    const today = new Date();
    this.maxDob = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    this.basicInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      dateOfBirth: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      gender: ['', Validators.required]
    });

    this.skillsForm = this.fb.group({
      skillName: ['', Validators.required],
      experience: ['', Validators.required],
      skillLevel: ['', Validators.required]
    });

    this.preview = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      phone: [''],
      gender: [''],
      skillName: [''],
      experience: [''],
      skillLevel: ['']
    });
  }
   onFormSubmit(): void {
    const employee: EmployeeState = {
      firstName: this.basicInfoForm.get('firstName').value,
      lastName: this.basicInfoForm.get('lastName').value,
      dateOfBirth: this.basicInfoForm.get('dateOfBirth').value,
      phone: this.basicInfoForm.get('phone').value,
      gender: this.basicInfoForm.get('gender').value,
      skillName: this.skillsForm.get('skillName').value,
      experienceInYears: this.skillsForm.get('experienceInYears').value,
      skillLevel: this.skillsForm.get('skillLevel').value,
      id: 0
    };
 //   this._employeeService.addEmployee({ employee });
  }
}
