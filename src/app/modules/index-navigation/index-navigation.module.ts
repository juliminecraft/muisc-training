import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexNavigationRoutingModule } from './index-navigation-routing.module';
import { IndexNavigationComponent } from './index-navigation.component';
import { AppMaterialModule } from '../../app.material.module';


@NgModule({
  declarations: [IndexNavigationComponent],
  imports: [
    CommonModule,
    IndexNavigationRoutingModule,
    AppMaterialModule
  ]
})
export class IndexNavigationModule { }
