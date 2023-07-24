import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-practice',
  templateUrl: './form-group-practice.component.html',
  styleUrls: ['./form-group-practice.component.css'],
})
export class FormGroupPracticeComponent {
  loginformGroup: FormGroup;
  cities: FormArray;
  sampleArr: Array<any> = [];

  defaultValues = {
    email: 'praneeth@gmail.com',
    password: 'Sachin@10',
  };

  constructor() {
    this.cities = new FormArray([new FormControl(''), new FormControl('')]);
    console.log(this.cities.controls);
    this.loginformGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        ),
      ]),
    });
    this.cities.valueChanges.subscribe((res) => {
      this.sampleArr = res;
      console.log(this.sampleArr);
    });
  }
  login() {
    console.log(this.loginformGroup);
    // console.log(this.loginformGroup.get('email')?.value)
    console.log(this.loginformGroup.value);
  }

  reset() {
    this.loginformGroup.setValue(this.defaultValues);
    // this.loginformGroup.patchValue(this.defaultValues)
  }

  getFormControl(formControl: string) {
    return this.loginformGroup.get(formControl);
  }

  getControl(index: number): FormControl {
    return this.cities.controls[index] as FormControl;
  }

  getData(): void {
    console.log(this.cities.value);
  }

  addData(): void {
    this.cities.push(new FormControl(''));
  }
  removefomrControl(ind: number): void {
    this.cities.removeAt(ind, {
      emitEvent: false,
    });
  }
}
