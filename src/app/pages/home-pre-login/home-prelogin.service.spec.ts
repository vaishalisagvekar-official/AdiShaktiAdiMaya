import { TestBed } from '@angular/core/testing';

import { HomePreloginService } from './home-prelogin.service';

describe('HomePreloginService', () => {
  let service: HomePreloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePreloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
