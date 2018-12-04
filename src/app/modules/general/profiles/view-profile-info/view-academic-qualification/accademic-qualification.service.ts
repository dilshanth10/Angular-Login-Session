import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcademicQualification } from './academic-qualification';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AccademicQualificationService {
  academic:AcademicQualification[]
  constructor(private httpObj:HttpClient) { }
  private prourl = "http://localhost:8080/hrm_system/academicQualification";

  getAcademicQualification(){
    return this.httpObj.get<AcademicQualification[]>(this.prourl);
  }
  getAcademicQualificationByUserId(uid){
    return this.httpObj.get<AcademicQualification[]>(this.prourl+"/"+uid);
  }
}
