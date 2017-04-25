import { TestBed, inject } from '@angular/core/testing';

import { ListdonorService } from './listdonor.service';

describe('ListdonorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListdonorService]
    });
  });

  it('should ...', inject([ListdonorService], (service: ListdonorService) => {
    expect(service).toBeTruthy();
  }));
});
