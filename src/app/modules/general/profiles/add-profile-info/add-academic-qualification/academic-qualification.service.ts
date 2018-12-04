import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcademicQualification } from './academic-qualification.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  
@Injectable({
  providedIn: 'root'
})
export class AcademicQualificationService {

  constructor(private http:HttpClient) { }
  
  private acaQualurl='http://localhost:8080/hrm_system/academicQualification';
  
  public addAcademicQualification(academicObj){
    return this.http.post<AcademicQualification>(this.acaQualurl,academicObj);
  }
}