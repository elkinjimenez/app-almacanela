import { TestBed } from '@angular/core/testing';

import { CamposGeneralesService } from './campos-generales.service';

describe('CamposGeneralesService', () => {
  let service: CamposGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamposGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
