import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'scales',
    loadChildren: () => import('./modules/scales-training/scales-training.module').then(m => m.ScalesTrainingModule)
  },
  { path: 'b2bschedule', loadChildren: () => import('./modules/b2bschedule/b2bsched.module').then(m => m.B2BScheduleModule) },
  { path: 'hearpitch', loadChildren: () => import('./modules/pitch-detect/pitch-detect.module').then(m => m.PitchDetectModule) },
  { path: 'index', loadChildren: () => import('./modules/index-navigation/index-navigation.module').then(m => m.IndexNavigationModule) },
  { path: '', loadChildren: () => import('./modules/index-navigation/index-navigation.module').then(m => m.IndexNavigationModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }