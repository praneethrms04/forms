import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-validation',
  templateUrl: './basic-validation.component.html',
  styleUrls: ['./basic-validation.component.css'],
})
export class BasicValidationComponent {
  signupObj = {
    username: '',
  };
  constructor(private router: Router) {}
  name : string = "praneeth"

  gotoHome() {
    this.router.navigate(['template-driven']);
  }

  signup() {
  }
}
