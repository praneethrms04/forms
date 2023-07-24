import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormGroupPracticeComponent } from './form-group-practice/form-group-practice.component';
import { AddressManagementSystemComponent } from './address-management-system/address-management-system.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ams',
    pathMatch: 'full',
  },
  {
    path: 'template-driven',
    component: TemplateDrivenFormComponent,
    children: [
      {
        path: 'basic-validation',
        loadChildren: () =>
          import(
            './template-driven-form/basic-validation/basic-validation.module'
          ).then((m) => m.BasicValidationModule),
      },
    ],
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormComponent,
  },
  {
    path: 'form-group',
    component: FormGroupPracticeComponent,
  },
  {
    path: 'ams',
    component: AddressManagementSystemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
