import { TestBed } from '@angular/core/testing';

import { ApiServicezService } from './api-servicez.service';

describe('ApiServicezService', () => {
  let service: ApiServicezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
