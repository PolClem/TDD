import { TestBed } from '@angular/core/testing';

import { IncrementadorService } from './incrementador.service';

describe('IncrementadorService', () => {
  let service: IncrementadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
