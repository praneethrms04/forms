import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  ]);
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    ),
  ]);
  login() {
    console.log(
      `email : ${this.email.value} ; password : ${this.password.value}`
    );
    return {
      email: this.email,
      password: this.password,
    };
  }

  changeName() {
    this.email.setValue('Praneethrms04@gmail.com');
  }
  removeValidation() {
    this.email.clearValidators();
    this.email.updateValueAndValidity();
  }

  meter: FormControl = new FormControl(null);
  centimeter: number = 0;

  // obj ={
  //   name :
  //   email :
  //   this.password :
  // }

  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    console.log(this.registerForm);

    this.meter.valueChanges.subscribe(() => {
      this.meter.value
        ? (this.centimeter = this.meter.value * 100)
        : (this.centimeter = 0);
    });
  }

  onRegister() {
    console.log(this.registerForm.value);
  }

  getValues() {
    const res = this.registerForm.get('email');
    console.log(res)
  }

  ngOnInit(): void {}

  // mark as touched ;

  cityControl: FormControl = new FormControl('', [Validators.required]);
  touch() {
    this.cityControl.markAsTouched();
  }

  // emailpattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  // passwordpattern = new RegExp(
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  // );
}
