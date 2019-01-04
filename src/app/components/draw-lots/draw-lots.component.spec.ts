import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLotsComponent } from './draw-lots.component';
import { describe, expect, beforeEach, it} from 'karma-jasmine'

describe('DrawLotsComponent', () => {
  let component: DrawLotsComponent;
  let fixture: ComponentFixture<DrawLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
