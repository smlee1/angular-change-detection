import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFirstComponent } from './one-first.component';

describe('OneFirstComponent', () => {
  let component: OneFirstComponent;
  let fixture: ComponentFixture<OneFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
