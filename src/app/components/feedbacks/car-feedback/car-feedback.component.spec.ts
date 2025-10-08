import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFeedbackComponent } from './car-feedback.component';

describe('CarFeedbackComponent', () => {
  let component: CarFeedbackComponent;
  let fixture: ComponentFixture<CarFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
