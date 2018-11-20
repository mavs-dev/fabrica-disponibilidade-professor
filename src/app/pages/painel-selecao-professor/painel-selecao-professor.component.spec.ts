import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelSelecaoProfessorComponent } from './painel-selecao-professor.component';

describe('PainelSelecaoProfessorComponent', () => {
  let component: PainelSelecaoProfessorComponent;
  let fixture: ComponentFixture<PainelSelecaoProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelSelecaoProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSelecaoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
