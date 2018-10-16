import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaInteresseItemComponent } from './disciplina-interesse-item.component';

describe('DisciplinaInteresseItemComponent', () => {
  let component: DisciplinaInteresseItemComponent;
  let fixture: ComponentFixture<DisciplinaInteresseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaInteresseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaInteresseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
