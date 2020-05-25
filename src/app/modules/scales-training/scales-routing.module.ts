import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScalesTrainingComponent } from './scales-training.component';


const routes: Routes = [

  {
    path: '',
    component: ScalesTrainingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ScalesRoutingModule { }