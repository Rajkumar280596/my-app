import { TestBed } from '@angular/core/testing';

import { NotifyGuard } from './notify.guard';

describe('NotifyGuard', () => {
  let guard: NotifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
