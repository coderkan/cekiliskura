import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { InputWheelService } from 'src/app/services/input-wheel/input-wheel.service';
import { Router, NavigationEnd } from '@angular/router';

// This still has to be declared
//declare var gtag: Function;
//gtag('config', 'UA-134615245-1');

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  filteredItems: Observable<string[]>;
  items;

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private service: InputWheelService,private router: Router) {
    this.items = new Set();
    /*this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => this._filter(fruit)));
        */
  }

  ngOnInit() {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        (<any>window).gtag('config', 'UA-134615245-1', {
          'page_title' : 'Input Item',
          'page_path': event.urlAfterRedirects
        });
      }
    });
  }

  add(event: MatChipInputEvent): void {
    // Add items only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our item
      if ((value || '').trim()) {
        this.items.add(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.itemCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    if (this.items.has(fruit)) {
      this.items.delete(fruit);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.add(event.option.viewValue);
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
  }

  loadData() {
    let tmpArray: string[] = [];
    this.items.forEach(element => { tmpArray.push(element); });
    this.service.addString(tmpArray);
  }

}
