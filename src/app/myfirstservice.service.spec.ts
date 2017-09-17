import { TestBed, inject } from '@angular/core/testing';

import { MyfirstserviceService } from './myfirstservice.service';

describe('MyfirstserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyfirstserviceService]
    });
  });

  it('should be created', inject([MyfirstserviceService], (service: MyfirstserviceService) => {
    expect(service).toBeTruthy();
  }));
});
