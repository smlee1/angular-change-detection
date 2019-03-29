import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSecondComponent } from './one-second.component';

describe('OneSecondComponent', () => {
  let component: OneSecondComponent;
  let fixture: ComponentFixture<OneSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
