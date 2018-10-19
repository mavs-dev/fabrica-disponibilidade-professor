import { TestBed } from '@angular/core/testing';

import { SemestreService } from './semestre.service';

describe('SemestreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemestreService = TestBed.get(SemestreService);
    expect(service).toBeTruthy();
  });
});
