import { TestBed } from '@angular/core/testing';

import { GitUser } from './git-user';

describe('GitUser', () => {
  let service: GitUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
