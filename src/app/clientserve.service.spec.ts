import { TestBed } from '@angular/core/testing';

import { ClientserveService } from './clientserve.service';

describe('ClientserveService', () => {
  let service: ClientserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
