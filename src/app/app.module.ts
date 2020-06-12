

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectScaleComponent } from './modules/scales-training/components/select-scale/select-scale.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, SelectScaleComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
