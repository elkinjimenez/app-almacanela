import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMoldeComponent } from './editar-molde.component';

describe('EditarMoldeComponent', () => {
  let component: EditarMoldeComponent;
  let fixture: ComponentFixture<EditarMoldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMoldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
