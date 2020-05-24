

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { ScalesComponent } from './modules/scales.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, ScalesComponent],
  entryComponents: [],
  bootstrap: [AppComponent, ScalesComponent],
})
export class AppModule { }
