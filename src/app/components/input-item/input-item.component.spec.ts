import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemComponent } from './input-item.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatAutocompleteModule } from '@angular/material/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('InputItemComponent', () => {
  let component: InputItemComponent;
  let fixture: ComponentFixture<InputItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        MatOptionModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [ InputItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
