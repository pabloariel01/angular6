import { TestBed, inject } from '@angular/core/testing';

import { LegajoService } from './legajo.service';

describe('LegajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegajoService]
    });
  });

  it('should be created', inject([LegajoService], (service: LegajoService) => {
    expect(service).toBeTruthy();
  }));
});
