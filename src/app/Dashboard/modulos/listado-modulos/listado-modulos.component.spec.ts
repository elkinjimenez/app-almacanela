import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoModulosComponent } from './listado-modulos.component';

describe('ListadoModulosComponent', () => {
  let component: ListadoModulosComponent;
  let fixture: ComponentFixture<ListadoModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
