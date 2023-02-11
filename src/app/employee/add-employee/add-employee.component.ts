import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
//import { UpdateFormData } from './add-employee.actions';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  basicInfoForm: FormGroup;
  skillsForm: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
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
  }
  onFormValueChange() {
    // this.store.dispatch(new UpdateFormData({
    //   basicInfo: this.basicInfoForm.value,
    //   skills: this.skillsForm.value
    // }));
  }
}


//In the add-employee.actions.ts file, create the action to update the store with the form data:

// import { createAction, props } from '@ngrx/store';

// export const updateFormData = createAction('[Add Employee] Update Form Data', props<{ basicInfo: any, skills: any }>());
