import { TestBed } from '@angular/core/testing';

import { PosfacilService } from './posfacil.service';

describe('PosfacilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosfacilService = TestBed.get(PosfacilService);
    expect(service).toBeTruthy();
  });
});
