import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
