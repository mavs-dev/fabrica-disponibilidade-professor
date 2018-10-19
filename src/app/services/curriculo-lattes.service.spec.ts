import { TestBed } from '@angular/core/testing';

import { CurriculoLattesService } from './curriculo-lattes.service';

describe('CurriculoLattesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurriculoLattesService = TestBed.get(CurriculoLattesService);
    expect(service).toBeTruthy();
  });
});
