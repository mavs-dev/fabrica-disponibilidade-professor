import { TestBed } from '@angular/core/testing';

import { DisciplinaService } from './disciplina.service';

describe('DisciplinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisciplinaService = TestBed.get(DisciplinaService);
    expect(service).toBeTruthy();
  });
});
