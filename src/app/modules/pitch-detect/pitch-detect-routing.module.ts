import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PitchDetectComponent } from './pitch-detect.component';

const routes: Routes = [{ path: '', component: PitchDetectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PitchDetectRoutingModule { }
