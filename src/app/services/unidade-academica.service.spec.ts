import { TestBed } from '@angular/core/testing';

import { UnidadeAcademicaService } from './unidade-academica.service';

describe('UnidadeAcademicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadeAcademicaService = TestBed.get(UnidadeAcademicaService);
    expect(service).toBeTruthy();
  });
});
