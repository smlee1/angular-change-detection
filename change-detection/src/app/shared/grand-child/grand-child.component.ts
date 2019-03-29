import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { ParentComponent } from "../parent/parent.component";


@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.sass']
})
export class GrandChildComponent implements OnInit {
  @Input() text;

  constructor(private child: ChildComponent, public parent: ParentComponent, zone: NgZone) {
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this.parent.name = "Grandchild Won";
      }, 1);
    });
  }

  ngOnInit() {
    this.child.childName ='I am child component updated grandchild';

    // this.parent.name = "Grandchild Won"
    // this.child.parent.name ='updated text2';
  }

}
