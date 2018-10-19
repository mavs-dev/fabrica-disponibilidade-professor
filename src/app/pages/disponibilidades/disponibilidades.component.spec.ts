import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadesComponent } from './disponibilidades.component';

describe('DisponibilidadesComponent', () => {
  let component: DisponibilidadesComponent;
  let fixture: ComponentFixture<DisponibilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
