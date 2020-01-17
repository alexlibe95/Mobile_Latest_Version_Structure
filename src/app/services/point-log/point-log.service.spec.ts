import { TestBed } from '@angular/core/testing';

import { PointLogService } from './point-log.service';

describe('PointLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointLogService = TestBed.get(PointLogService);
    expect(service).toBeTruthy();
  });
});
