/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaveManagementInteractionService } from './leave-management-interaction.service';

describe('Service: LeaveManagementInteraction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveManagementInteractionService]
    });
  });

  it('should ...', inject([LeaveManagementInteractionService], (service: LeaveManagementInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
