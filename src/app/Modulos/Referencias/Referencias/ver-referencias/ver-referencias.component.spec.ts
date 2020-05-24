import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReferenciasComponent } from './ver-referencias.component';

describe('VerReferenciasComponent', () => {
  let component: VerReferenciasComponent;
  let fixture: ComponentFixture<VerReferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerReferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
