import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExercise2Component } from './form-exercise2-component';

describe('FormExercise2Component', () => {
  let component: FormExercise2Component;
  let fixture: ComponentFixture<FormExercise2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormExercise2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(FormExercise2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
