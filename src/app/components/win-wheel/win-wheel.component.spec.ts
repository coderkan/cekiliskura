import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, ViewChild } from '@angular/core';
import { WinWheelComponent } from './win-wheel.component';
import { RouterTestingModule } from '@angular/router/testing';
declare var Winwheel: any;

describe('WinWheelComponent', () => {
  let component: WinWheelComponent;
  let fixture: ComponentFixture<WinWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [WinWheelComponent]
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
