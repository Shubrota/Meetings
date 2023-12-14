import { TestBed } from '@angular/core/testing';

import { MeetingserveService } from './meetingserve.service';

describe('MeetingserveService', () => {
  let service: MeetingserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
