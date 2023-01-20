import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IncrementadorComponent } from './incrementador.component';

const mock = {
  rangeValue: 5,
  counterValue: 0,
  resultIncrease: 5,
  resultDecrease: -5,
}


fdescribe('IncrementadorComponent', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncrementadorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir un intput numérico #counter', () => {
    const inputCounter = fixture.debugElement.query(By.css('#counter'));
    expect(inputCounter).toBeTruthy();
  });

  it('Debe existir un botón + incrementador #add', () => {
    const botonAdd = fixture.debugElement.query(By.css('#add'));
    expect(botonAdd).toBeTruthy();
  });

  it('Debe existir un botón - decrementador #substract', () => {
    const botonSubstract = fixture.debugElement.query(By.css('#substract'));
    expect(botonSubstract).toBeTruthy();
  });

  it('Debe existir un botón para resetear el input #reset', () => {
    const botonReset = fixture.debugElement.query(By.css('#reset'));
    expect(botonReset).toBeTruthy();
  });

  it('el atributo min del input debe ser 1', () => {
    const input = fixture.debugElement.query(By.css('#range'));
    expect(input.nativeElement.min).toBe('1');
  })

  it('Debe existir un input numérico que permita ingresar el intervalo #range', () => {
    const inputRange = fixture.debugElement.query(By.css('#range'));
    expect(inputRange).toBeTruthy();
  });

  it('El input #range debe comenzar en 1', () => {
    const inputRange = fixture.debugElement.query(By.css('#range'));
    const el = inputRange.nativeElement;
    expect(el.value).toBe('1');
  });

  it('Al hacer click en el botón #add debe llamar a la función increase()', () => {
    const add = fixture.debugElement.query(By.css('#add'));
    const spy = spyOn(component, 'increase');
    add.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('Al hacer click en el botón #substract debe llamar a la función decrease()', () => {
    const substract = fixture.debugElement.query(By.css('#substract'));
    const spy = spyOn(component, 'decrease');
    substract.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('Al hacer click en el botón #reset debe llamar a la función reset()', () => {
    const reset = fixture.debugElement.query(By.css('#reset'));
    const spy = spyOn(component, 'reset');
    reset.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('La función increase debe incrementar en valor de #range el input #counter', () => {
    component.range.setValue(mock.rangeValue);
    component.counter.setValue(mock.counterValue);
    component.increase();
    fixture.detectChanges();
    expect(component.counter.value).toEqual(mock.resultIncrease);
  });

  it('La función decrease debe decrementar en valor de #range el input #counter', () => {
    component.range.setValue(mock.rangeValue);
    component.counter.setValue(mock.counterValue);
    component.decrease();
    fixture.detectChanges();
    expect(component.counter.value).toEqual(mock.resultDecrease);
  });

  it('la función reset debe volver el valor de #counter a su valor a cero', () => { });

});
