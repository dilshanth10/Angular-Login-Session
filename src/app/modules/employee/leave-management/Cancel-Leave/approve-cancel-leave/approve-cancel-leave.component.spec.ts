import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCancelLeaveComponent } from './approve-cancel-leave.component';

describe('ApproveCancelLeaveComponent', () => {
  let component: ApproveCancelLeaveComponent;
  let fixture: ComponentFixture<ApproveCancelLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveCancelLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveCancelLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
