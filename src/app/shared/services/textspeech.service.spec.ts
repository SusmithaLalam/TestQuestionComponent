import { TestBed } from '@angular/core/testing';

import { TextspeechService } from './textspeech.service';

describe('TextspeechService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextspeechService = TestBed.get(TextspeechService);
    expect(service).toBeTruthy();
  });
});
