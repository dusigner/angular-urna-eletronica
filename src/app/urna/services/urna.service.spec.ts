import { TestBed } from '@angular/core/testing';

import { UrnaService } from './urna.service';

describe('UrnaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrnaService = TestBed.get(UrnaService);
    expect(service).toBeTruthy();
  });
});
