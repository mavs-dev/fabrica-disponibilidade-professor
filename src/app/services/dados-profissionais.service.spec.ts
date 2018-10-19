import { TestBed } from '@angular/core/testing';

import { DadosProfissionaisService } from './dados-profissionais.service';

describe('DadosProfissionaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosProfissionaisService = TestBed.get(DadosProfissionaisService);
    expect(service).toBeTruthy();
  });
});
