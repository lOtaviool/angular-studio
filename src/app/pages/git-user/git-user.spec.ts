import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUser } from './git-user';

describe('GitUser', () => {
  let component: GitUser;
  let fixture: ComponentFixture<GitUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
