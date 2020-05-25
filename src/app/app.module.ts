

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { ScalesTrainingModule } from './modules/scales-training/scales-training.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ScalesTrainingModule
  ],
  declarations: [AppComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
