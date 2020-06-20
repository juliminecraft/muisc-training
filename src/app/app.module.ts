

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [    
    FormsModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
