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
import { AdsenseModule } from 'ng2-adsense';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
        AdsenseModule.forRoot({
          adClient: 'ca-pub-8446606602742080',
          adSlot: 7259870550,
        })
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AdvertisementComponent,
        InputItemComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));
   
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
