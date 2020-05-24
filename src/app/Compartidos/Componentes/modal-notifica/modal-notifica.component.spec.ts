import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotificaComponent } from './modal-notifica.component';

describe('ModalNotificaComponent', () => {
  let component: ModalNotificaComponent;
  let fixture: ComponentFixture<ModalNotificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNotificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
