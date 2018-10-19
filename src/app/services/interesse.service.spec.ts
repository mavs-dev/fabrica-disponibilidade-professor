import { TestBed } from '@angular/core/testing';

import { InteresseService } from './interesse.service';

describe('InteresseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteresseService = TestBed.get(InteresseService);
    expect(service).toBeTruthy();
  });
});
