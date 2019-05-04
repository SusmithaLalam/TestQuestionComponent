import { TestBed } from '@angular/core/testing';

import { SpeechtotextService } from './speechtotext.service';

describe('SpeechtotextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechtotextService = TestBed.get(SpeechtotextService);
    expect(service).toBeTruthy();
  });
});
