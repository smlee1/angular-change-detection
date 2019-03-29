import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, GrandChildComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ParentComponent, ChildComponent]
})
export class SharedModule { }
