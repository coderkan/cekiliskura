import { TestBed } from '@angular/core/testing';

import { InputWheelService } from './input-wheel.service';

describe('InputWheelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputWheelService = TestBed.get(InputWheelService);
    expect(service).toBeTruthy();
  });
});
