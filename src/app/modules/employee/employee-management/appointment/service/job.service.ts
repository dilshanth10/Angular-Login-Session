import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Job } from '../../../recruitment/Modal/job';
const HttpOptions ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  private jobUrl='http://localhost:8080/hrm_system/job';

  getAllJob(){
    return this.http.get<Job[]>(this.jobUrl);
  }
}
