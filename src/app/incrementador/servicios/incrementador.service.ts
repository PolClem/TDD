import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/base/store';

export interface estado {
  counter: number;
  range: number;
}

@Injectable({
  providedIn: 'root'
})
export class IncrementadorService extends Store<estado> {

  // private _counter = new BehaviorSubject<estado>({ counter: 0, range: 1 });
  // public readonly $counter = this._counter.asObservable();

  constructor() {
    super({
      counter: 0,
      range: 1
    });
  }

  public increase() {
    const newState: estado = {
      ...this.currentValue,
      counter: this.currentValue.counter + this.currentValue.range
    }
  }

  public changeRange(value: number) {
    const newState: estado = {
      ...this.currentValue,
      range: value
    }
  }

  // public increase() {
  //   const newState: estado = {
  //     ...this._counter.value,
  //     counter: this._counter.value.counter + this._counter.value.range
  //   }
  //   this.setState(newState)
  // }

  // private setState(nweState: estado) {
  //   this._counter.next(nweState);
  // }

}
