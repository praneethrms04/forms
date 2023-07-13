import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  constructor(private router: Router) {}

  data: boolean = false;
  showContent: boolean = false;

  signupObj = {
    city: '',
    phone: '',
  };

  signup() {
    console.log(this.signupObj);
  }

  isHidden() {
    this.data = !this.data;
    this.showContent = !this.showContent;
  }

  formObj = {
    userName: '',
    password: '',
  };

  login(data: any) {
    console.log(data.form.value);
    console.log(data.form);
    console.log(data.form.controls['username'].value);
    console.log(data.form.controls['password'].value);
  }

  onSubmit() {
    console.log(this.formObj);
  }

  registerObj = {
    name: '',
    password: '',
    gender: 'male',
  };

  emailpattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  passwordpattern = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  );

  register() {
    console.log(this.registerObj);
    // this.registerObj.reset()
  }

  gotoBV() {
    this.router.navigate(['template-driven', 'basic-validation']);
  }
}
