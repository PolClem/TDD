import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { estado, IncrementadorService } from './servicios/incrementador.service';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  public rangeValue = 1;
  public range = new FormControl(1);
  public counter = new FormControl(0);

  constructor(
    private incrementadorService: IncrementadorService,
  ) {
    this.incrementadorService.$counter.subscribe((estado: estado) => {
      this.counter.setValue(estado.counter)
    })
  }

  ngOnInit(): void {
  }


  public increase() {
    // this.counter.setValue(this.range.value + this.counter.value);
    this.incrementadorService.increase()
  }

  public decrease() {
    this.counter.setValue(this.counter.value - this.range.value);
  }

  public reset() {

  }
}
