import { TestBed } from '@angular/core/testing';

import { TempoService } from './tempo.service';

describe('TempoService', () => {
  let service: TempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
