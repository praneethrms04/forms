import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormGroupPracticeComponent } from './form-group-practice/form-group-practice.component';
import { ComponentAComponent } from './reactive-form/component-a/component-a.component';
import { AddressManagementSystemComponent } from './address-management-system/address-management-system.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    FormGroupPracticeComponent,
    ComponentAComponent,
    AddressManagementSystemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
