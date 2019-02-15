import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-draw-lots',
  templateUrl: './draw-lots.component.html',
  styleUrls: ['./draw-lots.component.scss']
})
export class DrawLotsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        (<any>window).gtag('config', 'UA-134615245-1', {
          'page_title' : 'Draw Lots Page',
          'page_path': event.urlAfterRedirects
        });
      }
    });
  }

}
