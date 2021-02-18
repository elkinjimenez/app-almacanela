import { TestBed } from '@angular/core/testing';

import { ModalNotificaService } from './modal-notifica.service';

describe('ModalNotificaService', () => {
  let service: ModalNotificaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalNotificaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
