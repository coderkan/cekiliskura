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
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
