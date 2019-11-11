import { TestBed, async, inject } from '@angular/core/testing';

import { ManageInventoryGuard } from './manage-inventory.guard';

describe('ManageInventoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageInventoryGuard]
    });
  });

  it('should ...', inject([ManageInventoryGuard], (guard: ManageInventoryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
