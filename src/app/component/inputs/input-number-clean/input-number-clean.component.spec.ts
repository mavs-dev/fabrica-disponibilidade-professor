import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberCleanComponent } from './input-number-clean.component';

describe('InputNumberCleanComponent', () => {
  let component: InputNumberCleanComponent;
  let fixture: ComponentFixture<InputNumberCleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberCleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
