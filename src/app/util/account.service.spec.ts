import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('TokensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
