import { TestBed } from '@angular/core/testing';

import { ExperienceListService } from './experience-list.service';

describe('ExperienceListService', () => {
  let service: ExperienceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
