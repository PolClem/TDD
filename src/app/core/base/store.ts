import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
export class Store<T> {
  private state: BehaviorSubject<T>;
  public readonly state$: Observable<T>;
  constructor(initialState: T) {
    this.state = new BehaviorSubject(initialState);
    this.state$ = this.state.asObservable();
  }
  get currentValue() {
    return this.state.getValue();
  }
  protected setState(newState: T) {
    this.state.next(newState);
  }
  public suscribeOnly(key: keyof T) {
    return this.state$.pipe(
      map((state) => state[key]),
      distinctUntilChanged()
    );
  }
}
