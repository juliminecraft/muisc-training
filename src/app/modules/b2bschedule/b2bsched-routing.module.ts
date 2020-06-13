import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B2BScheduleComponent } from './b2bsched.component';

const routes: Routes = [

  {
    path: '',
    component: B2BScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class B2BScheduleRoutingModule { }
