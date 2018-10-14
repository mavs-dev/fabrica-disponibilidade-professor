import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosProfissionaisComponent } from './dados-profissionais.component';

describe('DadosProfissionaisComponent', () => {
  let component: DadosProfissionaisComponent;
  let fixture: ComponentFixture<DadosProfissionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosProfissionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
