import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelLeaveRejectComponent } from './cancel-leave-reject.component';

describe('CancelLeaveRejectComponent', () => {
  let component: CancelLeaveRejectComponent;
  let fixture: ComponentFixture<CancelLeaveRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLeaveRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLeaveRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
