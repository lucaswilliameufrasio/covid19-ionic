import { TestBed } from '@angular/core/testing';

import { Covid19brazilService } from './covid19brazil.service';

describe('Covid19brazilService', () => {
  let service: Covid19brazilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19brazilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
