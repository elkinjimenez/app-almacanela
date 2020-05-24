import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosVaciosComponent } from './datos-vacios.component';

describe('DatosVaciosComponent', () => {
  let component: DatosVaciosComponent;
  let fixture: ComponentFixture<DatosVaciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosVaciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosVaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
