import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMoldeComponent } from './crear-molde.component';

describe('CrearMoldeComponent', () => {
  let component: CrearMoldeComponent;
  let fixture: ComponentFixture<CrearMoldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMoldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
