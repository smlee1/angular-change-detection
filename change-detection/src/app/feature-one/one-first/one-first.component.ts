import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-first',
  templateUrl: './one-first.component.html',
  styleUrls: ['./one-first.component.sass']
})
export class OneFirstComponent {

  constructor(zone: NgZone) {
    this._time = Date.now();
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }

  /*  getTime() {
      return Date.now();
    }*/

  /*  get time() {
      return Date.now();
    }*/

  get time() {
    return this._time;
  }

  _time;

}




