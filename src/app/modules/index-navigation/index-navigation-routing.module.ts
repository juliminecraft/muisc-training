import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexNavigationComponent } from './index-navigation.component';

const routes: Routes = [{ path: '', component: IndexNavigationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexNavigationRoutingModule { }
