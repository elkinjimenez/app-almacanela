import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoldesComponent } from './home-moldes.component';

describe('HomeMoldesComponent', () => {
  let component: HomeMoldesComponent;
  let fixture: ComponentFixture<HomeMoldesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMoldesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
