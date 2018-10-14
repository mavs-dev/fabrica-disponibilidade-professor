import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProjecaoResponsiveComponent } from './image-projecao-responsive.component';

describe('ImageProjecaoResponsiveComponent', () => {
  let component: ImageProjecaoResponsiveComponent;
  let fixture: ComponentFixture<ImageProjecaoResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageProjecaoResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProjecaoResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
