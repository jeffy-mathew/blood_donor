import { TestBed, inject } from '@angular/core/testing';

import { PendingService } from './pending.service';

describe('PendingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingService]
    });
  });

  it('should ...', inject([PendingService], (service: PendingService) => {
    expect(service).toBeTruthy();
  }));
});
