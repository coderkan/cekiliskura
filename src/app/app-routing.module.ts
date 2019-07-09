import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WinWheelComponent } from './components/win-wheel/win-wheel.component';
import { DrawLotsComponent } from './components/draw-lots/draw-lots.component';

const routes: Routes = [
  { path: '', redirectTo:'/winwheel', pathMatch:'full' },
  { path: 'winwheel', component: WinWheelComponent },
  { path: 'drawlots', component: DrawLotsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
