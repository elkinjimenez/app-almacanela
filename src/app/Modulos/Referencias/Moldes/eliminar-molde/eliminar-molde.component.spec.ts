import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMoldeComponent } from './eliminar-molde.component';

describe('EliminarMoldeComponent', () => {
  let component: EliminarMoldeComponent;
  let fixture: ComponentFixture<EliminarMoldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMoldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
