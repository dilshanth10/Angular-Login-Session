import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRejectModalComponent } from './leave-reject-modal.component';

describe('LeaveRejectModalComponent', () => {
  let component: LeaveRejectModalComponent;
  let fixture: ComponentFixture<LeaveRejectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveRejectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRejectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
