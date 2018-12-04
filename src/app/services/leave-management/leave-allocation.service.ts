import { LeaveAllocation } from './../../models/leave-management/leave-allocation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveAllocationService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8090/hrm_system/leaveallocation";

  public getAllLeaveAllocationByUser(user) {
    return this.http.get<LeaveAllocation[]>(this.baseUrl + "/" + user)
  }
}
