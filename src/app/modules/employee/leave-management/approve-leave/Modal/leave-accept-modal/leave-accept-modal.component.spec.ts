import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAcceptModalComponent } from './leave-accept-modal.component';

describe('LeaveAcceptModalComponent', () => {
  let component: LeaveAcceptModalComponent;
  let fixture: ComponentFixture<LeaveAcceptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveAcceptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAcceptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
