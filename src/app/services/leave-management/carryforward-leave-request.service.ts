import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CarryforwardLeaveRequest } from 'src/app/models/leave-management/carryforward-leave-request';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CarryforwardLeaveRequestService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:8090/hrm_system/carryforwardrequest";

  public addCarryforwardLeaveRequest(carryforwardrequest){
    return this.http.post<CarryforwardLeaveRequest>(this.baseUrl,carryforwardrequest)
  }

  public getCarryforwardLeaveRequest(){
    return this.http.get<CarryforwardLeaveRequest[]>(this.baseUrl)
  }
}
