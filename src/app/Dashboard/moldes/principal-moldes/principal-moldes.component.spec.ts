import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMoldesComponent } from './principal-moldes.component';

describe('PrincipalMoldesComponent', () => {
  let component: PrincipalMoldesComponent;
  let fixture: ComponentFixture<PrincipalMoldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMoldesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
