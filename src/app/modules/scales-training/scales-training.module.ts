import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScalesTrainingComponent } from './scales-training.component';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { ScalesRoutingModule } from './scales-routing.module';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [ScalesTrainingComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ScalesRoutingModule
  ],
  providers: [CookieService],
  exports: [ScalesTrainingComponent]
})
export class ScalesTrainingModule { }
