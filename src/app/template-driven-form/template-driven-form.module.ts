import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { BasicValidationComponent } from './basic-validation/basic-validation.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BasicValidationComponent],
  imports: [
    CommonModule,
    TemplateDrivenFormRoutingModule,
    FormsModule,
    BrowserModule,
  ],
})
export class TemplateDrivenFormModule {}
