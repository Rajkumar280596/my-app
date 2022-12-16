import { TestBed } from '@angular/core/testing';

import { Boredom1Service } from './boredom1.service';

describe('Boredom1Service', () => {
  let service: Boredom1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Boredom1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
