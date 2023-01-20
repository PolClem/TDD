import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncrementadorService {
  private _counter = new BehaviorSubject<string[]>(null);
  public readonly $counter = this._counter.asObservable();

  constructor() { }

  public setCounter() {
    this.counter.setValue(this.range.value + this.counter.value);
  }
}
