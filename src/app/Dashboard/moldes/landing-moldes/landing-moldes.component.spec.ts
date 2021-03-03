import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMoldesComponent } from './landing-moldes.component';

describe('LandingMoldesComponent', () => {
  let component: LandingMoldesComponent;
  let fixture: ComponentFixture<LandingMoldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingMoldesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
