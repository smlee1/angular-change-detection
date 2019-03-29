import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureOneRoutingModule } from './feature-one-routing.module';

import { OneFirstComponent } from './one-first/one-first.component';
import { OneSecondComponent } from './one-second/one-second.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [OneFirstComponent, OneSecondComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeatureOneRoutingModule
  ]
})
export class FeatureOneModule { }
