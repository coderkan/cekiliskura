import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { AdvertisementComponent } from '../app/components/advertisement/advertisement.component';
import { InputItemComponent } from '../app/components/input-item/input-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatAutocompleteModule } from '@angular/material/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        MatOptionModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AdvertisementComponent,
        InputItemComponent,
      
      ],
    }).compileComponents();
  }));
   
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
