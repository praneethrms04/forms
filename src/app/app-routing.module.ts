import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reactive-forms',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
