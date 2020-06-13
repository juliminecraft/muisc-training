import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { ScheduleComponent } from './components/schedule/schedule.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ReseterComponent } from './components/reseter/reseter.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../../environments/environment'
import { B2BScheduleRoutingModule } from './b2bsched-routing.module';
import { B2BScheduleComponent } from './b2bsched.component';
import { PwaService } from './services/pwa.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ScheduleComponent,
    LessonComponent,
    ReseterComponent,
    B2BScheduleComponent
  ],
  imports: [
    B2BScheduleRoutingModule,
    FormsModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [B2BScheduleComponent],
  providers: [PwaService],
  bootstrap: [B2BScheduleComponent]
})
export class B2BScheduleModule { }
