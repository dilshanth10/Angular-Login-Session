import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelLeaveAcceptComponent } from './cancel-leave-accept.component';

describe('CancelLeaveAcceptComponent', () => {
  let component: CancelLeaveAcceptComponent;
  let fixture: ComponentFixture<CancelLeaveAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelLeaveAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelLeaveAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
