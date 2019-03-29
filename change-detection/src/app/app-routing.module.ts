import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'first', loadChildren: './feature-one/feature-one.module#FeatureOneModule'},
  // {path: 'second', loadChildren: './feature-two/feature-two-module#FeatureTwoModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
