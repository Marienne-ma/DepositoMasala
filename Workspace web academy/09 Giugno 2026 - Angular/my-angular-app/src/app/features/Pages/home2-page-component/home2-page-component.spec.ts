import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2PageComponent } from './home2-page-component';

describe('Home2PageComponent', () => {
  let component: Home2PageComponent;
  let fixture: ComponentFixture<Home2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2PageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Home2PageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
