import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputWheelService {

  listObs: Observable<string[]>;
  list: BehaviorSubject<string[]>;
  constructor() {
    this.list = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this.listObs = this.list.asObservable();
  }

  addString(val: string[]) {
    this.list.next(val);
  }
}
