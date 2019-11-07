import { TestBed } from '@angular/core/testing';

import { RocketEditService } from './rocket-edit.service';

describe('RocketEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RocketEditService = TestBed.get(RocketEditService);
    expect(service).toBeTruthy();
  });
});
