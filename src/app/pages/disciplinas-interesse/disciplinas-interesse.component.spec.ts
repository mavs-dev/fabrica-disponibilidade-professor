import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasInteresseComponent } from './disciplinas-interesse.component';

describe('DisciplinasInteresseComponent', () => {
  let component: DisciplinasInteresseComponent;
  let fixture: ComponentFixture<DisciplinasInteresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinasInteresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasInteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
