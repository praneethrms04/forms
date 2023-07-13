import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  ], );
  password: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    ),
  ]);

  changeName() {
    this.email.setValue('Praneethrms04@gmail.com');
  }
  removeValidation(){
    this.email.clearValidators()
    this.email.updateValueAndValidity()
  }

  //set validators
  //set value

  // emailpattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  // passwordpattern = new RegExp(
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  // );

  login() {
    console.log(
      `email : ${this.email.value} ; password : ${this.password.value}`
    );
    return {
      email: this.email,
      password: this.password,
    };
  }
}
