import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMoldesComponent } from './listar-moldes.component';

describe('ListarMoldesComponent', () => {
  let component: ListarMoldesComponent;
  let fixture: ComponentFixture<ListarMoldesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMoldesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
