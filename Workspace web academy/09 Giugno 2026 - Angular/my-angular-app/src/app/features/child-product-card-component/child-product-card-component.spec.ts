import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductCardComponent } from './child-product-card-component';

describe('ChildProductCardComponent', () => {
  let component: ChildProductCardComponent;
  let fixture: ComponentFixture<ChildProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildProductCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
