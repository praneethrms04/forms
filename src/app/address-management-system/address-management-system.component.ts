import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address-management-system',
  templateUrl: './address-management-system.component.html',
  styleUrls: ['./address-management-system.component.css'],
})
export class AddressManagementSystemComponent implements OnInit {
  registerAddress: FormGroup;

  obj = {
    name: 'praneeth',
    email: 'praneethrms04@gmail.com',
    addresses: [
      {
        id: 1,
        streetName: 'bc-colony',
        cityName: 'puttaparthy',
        stateName: 'Andhra Pradesh',
      },
      {
        id: 2,
        streetName: 'bc-colony',
        cityName: 'puttaparthy',
        stateName: 'Andhra Pradesh',
      },
    ],
  };

  // constructor() {
  //   this.registerAddress = new FormGroup({
  //     name: new FormControl(
  //       '',
  //       Validators.compose([Validators.required, Validators.minLength(5)])
  //     ),
  //     email: new FormControl(
  //       '',
  //       Validators.compose([Validators.required, Validators.email])
  //     ),
  //     addresses: new FormArray([]),
  //   });
  //   this.obj.addresses.forEach(() => {
  //     this.addAddress();
  //   });

  //   this.registerAddress.patchValue(this.obj);
  // }

  constructor(private formBuilder: FormBuilder) {
    this.registerAddress = this.formBuilder.group({
      name: this.formBuilder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      email: this.formBuilder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      addresses: this.formBuilder.array([]),
    });
    this.obj.addresses.forEach(() => {
      this.addAddress();
    });

    this.registerAddress.patchValue(this.obj);
  }

  ngOnInit(): void {}

  //form array conveted to formgroup

  public get addressesAsFormArray(): FormArray {
    return this.registerAddress.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addressesAsFormArray.push(this.getAddressForm());
  }

  removeAddress(index: number): void {
    this.addressesAsFormArray.removeAt(index);
  }

  isFieldValid(formGroup: any, formControlName: string) {
    if (
      formGroup.get(formControlName)?.invalid &&
      (formGroup.get(formControlName)?.touched ||
        formGroup.get(formControlName)?.dirty)
    ) {
      return true;
    } else {
      return false;
    }
  }

  getFieldByErrorType(formGroup: any, formControlName: string, type: string) {
    return formGroup.get(formControlName)?.errors?.[type];
  }

  getAddressForm() {
    return this.formBuilder.group({
      id: this.formBuilder.control(
        this.addressesAsFormArray.controls.length + 1
      ),
      streetName: this.formBuilder.control(
        '',
        Validators.compose([Validators.required])
      ),
      cityName: this.formBuilder.control(
        '',
        Validators.compose([Validators.required])
      ),
      stateName: this.formBuilder.control(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  register() {
    console.log(this.registerAddress.value);
  }
}
