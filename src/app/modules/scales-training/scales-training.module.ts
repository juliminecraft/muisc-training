import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScalesTrainingComponent } from './scales-training.component';
import { AppMaterialModule } from 'app/app.material.module';
import { FormsModule } from '@angular/forms';
import { ScalesRoutingModule } from './scales-routing.module';



@NgModule({
  declarations: [ScalesTrainingComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ScalesRoutingModule
  ],
  exports: [ScalesTrainingComponent]
})
export class ScalesTrainingModule { }
