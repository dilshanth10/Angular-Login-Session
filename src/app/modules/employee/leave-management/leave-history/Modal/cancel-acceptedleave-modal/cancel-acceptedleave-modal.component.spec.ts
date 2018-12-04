import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAcceptedleaveModalComponent } from './cancel-acceptedleave-modal.component';

describe('CancelAcceptedleaveModalComponent', () => {
  let component: CancelAcceptedleaveModalComponent;
  let fixture: ComponentFixture<CancelAcceptedleaveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelAcceptedleaveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelAcceptedleaveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
