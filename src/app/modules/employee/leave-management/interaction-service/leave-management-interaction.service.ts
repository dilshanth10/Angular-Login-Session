import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/leave-management/user';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementInteractionService {

  constructor() { }

  private user = new Subject<User>();
  private leaveId = new Subject<number>()
  private msg = new Subject<string>()

  user$ = this.user.asObservable();
  leaveId$ = this.leaveId.asObservable();
  msg$ = this.msg.asObservable();

  sendUserId(user: User) {
    this.user.next(user);
  }

  setLeaveId(leaveId: number) {
    this.leaveId.next(leaveId);
  }

  updateMsg(msg: string) {
    this.msg.next(msg);
  }
}
