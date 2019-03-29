import { Component, Input, OnInit } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  @Input() text;
  childName = 'I am Child Component';

  constructor(public parent: ParentComponent) { }

  ngOnInit() {
    this.parent.name ='I am parent component updated by child component'
    // this.parent.text ='updated text'
  }

  ngAfterViewInit() {
    // this.parent.name = 'updated name';
  }

}
