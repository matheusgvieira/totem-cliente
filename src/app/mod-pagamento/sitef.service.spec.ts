import { TestBed } from '@angular/core/testing';

import { SitefService } from './sitef.service';

describe('SitefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SitefService = TestBed.get(SitefService);
    expect(service).toBeTruthy();
  });
});
