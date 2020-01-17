import { TestBed } from '@angular/core/testing';

import { OtpValidationService } from './otp-validation.service';

describe('OtpValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtpValidationService = TestBed.get(OtpValidationService);
    expect(service).toBeTruthy();
  });
});
