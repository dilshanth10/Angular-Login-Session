import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoanDetails } from '../Model/user-loan-details';

@Injectable({
  providedIn: 'root'
})
export class EmpViewLoanDetailsService {
  private loanDetailsByEmpUrl = 'http://localhost:8080/hrm_system/userloandetails/1';
  constructor(private http:HttpClient) { }
  public getSpecifigEmp(): Observable<UserLoanDetails[]>{
    return this.http.get<UserLoanDetails[]>(this.loanDetailsByEmpUrl)
  }
}
