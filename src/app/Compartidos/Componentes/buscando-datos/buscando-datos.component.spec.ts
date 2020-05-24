import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscandoDatosComponent } from './buscando-datos.component';

describe('BuscandoDatosComponent', () => {
  let component: BuscandoDatosComponent;
  let fixture: ComponentFixture<BuscandoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscandoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscandoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
