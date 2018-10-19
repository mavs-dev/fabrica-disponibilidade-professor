import { TestBed } from '@angular/core/testing';

import { DisponibilidadeService } from './disponibilidade.service';

describe('DisponibilidadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisponibilidadeService = TestBed.get(DisponibilidadeService);
    expect(service).toBeTruthy();
  });
});
