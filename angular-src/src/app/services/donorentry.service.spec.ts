import { TestBed, inject } from '@angular/core/testing';

import { DonorentryService } from './donorentry.service';

describe('DonorentryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonorentryService]
    });
  });

  it('should ...', inject([DonorentryService], (service: DonorentryService) => {
    expect(service).toBeTruthy();
  }));
});
