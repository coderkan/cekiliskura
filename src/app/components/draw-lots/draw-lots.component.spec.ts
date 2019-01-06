import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLotsComponent } from './draw-lots.component';
 
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
