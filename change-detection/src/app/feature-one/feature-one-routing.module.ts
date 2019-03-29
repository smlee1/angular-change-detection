import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneFirstComponent } from "./one-first/one-first.component";

const routes: Routes = [
  {path: '', component: OneFirstComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureOneRoutingModule { }
