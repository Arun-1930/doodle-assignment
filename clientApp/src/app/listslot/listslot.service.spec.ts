import { TestBed } from '@angular/core/testing';

import { ListslotService } from './listslot.service';

describe('ListslotService', () => {
  let service: ListslotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListslotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
