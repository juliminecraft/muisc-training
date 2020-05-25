import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexNavigationComponent } from './modules/index-navigation/index-navigation.component';


const routes: Routes = [
  {
    path: 'scales',
    loadChildren: () => import('./modules/scales-training/scales-training.module').then(m => m.ScalesTrainingModule)
  },

  { path: 'hearpitch', loadChildren: () => import('./modules/pitch-detect/pitch-detect.module').then(m => m.PitchDetectModule) },
  { path: 'index', loadChildren: () => import('./modules/index-navigation/index-navigation.module').then(m => m.IndexNavigationModule) },
  { path: '', component: IndexNavigationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }