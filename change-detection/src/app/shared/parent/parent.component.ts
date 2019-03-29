import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {
  name = 'I am Parent Component';
  text = 'A message for child component';

  constructor() { }

  ngOnInit() {
  }

}
