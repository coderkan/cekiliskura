import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WinWheelComponent } from './components/win-wheel/win-wheel.component';
import { DrawLotsComponent } from './components/draw-lots/draw-lots.component';
import { InputItemComponent } from './components/input-item/input-item.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatAutocompleteModule } from '@angular/material/';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdsenseModule } from 'ng2-adsense'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WinWheelComponent,
    DrawLotsComponent,
    InputItemComponent,
    AdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
