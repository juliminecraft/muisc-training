import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PitchDetectRoutingModule } from './pitch-detect-routing.module';
import { PitchDetectComponent } from './pitch-detect.component';


@NgModule({
  declarations: [PitchDetectComponent],
  imports: [
    CommonModule,
    PitchDetectRoutingModule
  ]
})
export class PitchDetectModule { }
