import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinWheelComponent } from './win-wheel.component';
//import 'jasmine'
import { describe, expect, beforeEach, it} from 'karma-jasmine'

describe('WinWheelComponent', () => {
  let component: WinWheelComponent;
  let fixture: ComponentFixture<WinWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
