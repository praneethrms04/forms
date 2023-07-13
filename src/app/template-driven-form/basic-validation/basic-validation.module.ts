import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicValidationRoutingModule } from './basic-validation-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicValidationRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class BasicValidationModule { }
