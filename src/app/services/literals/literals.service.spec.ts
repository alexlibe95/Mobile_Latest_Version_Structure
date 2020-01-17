import { TestBed } from '@angular/core/testing';

import { LiteralsService } from './literals.service';

describe('LiteralsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteralsService = TestBed.get(LiteralsService);
    expect(service).toBeTruthy();
  });
});
