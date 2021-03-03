import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMoldesComponent } from './listado-moldes.component';

describe('ListadoMoldesComponent', () => {
  let component: ListadoMoldesComponent;
  let fixture: ComponentFixture<ListadoMoldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMoldesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
