import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface estado {
  counter: number;
  range: number;
}

@Injectable({
  providedIn: 'root'
})
export class IncrementadorService {

  private _counter = new BehaviorSubject<estado>({ counter: 0, range: 1 });
  public readonly $counter = this._counter.asObservable();

  constructor() { }

  public increase() {
    const newState: estado = {
      ...this._counter.value,
      counter: this._counter.value.counter + this._counter.value.range
    }
    this.setState(newState)
  }

  private setState(nweState: estado) {
    this._counter.next(nweState);
  }

}
