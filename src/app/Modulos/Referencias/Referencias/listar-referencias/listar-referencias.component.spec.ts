import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReferenciasComponent } from './listar-referencias.component';

describe('ListarReferenciasComponent', () => {
  let component: ListarReferenciasComponent;
  let fixture: ComponentFixture<ListarReferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarReferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
