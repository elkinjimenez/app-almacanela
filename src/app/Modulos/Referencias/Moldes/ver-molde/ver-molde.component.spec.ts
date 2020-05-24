import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMoldeComponent } from './ver-molde.component';

describe('VerMoldeComponent', () => {
  let component: VerMoldeComponent;
  let fixture: ComponentFixture<VerMoldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMoldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
