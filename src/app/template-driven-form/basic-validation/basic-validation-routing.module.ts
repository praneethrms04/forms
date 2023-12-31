import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicValidationComponent } from './basic-validation.component';

const routes: Routes = [
  {
    path: '',
    component: BasicValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicValidationRoutingModule {}
