import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ViewProfessionalMembership } from './view-professional-membership';

const httpOption={
  headers:new HttpHeaders({'content-Type':'application/jsonm'})
};
@Injectable({
  providedIn: 'root'
})
export class ViewProfessionalMembershipService {

  constructor(private http:HttpClient) { }
  private proMembershipUrl="http://localhost:8080/hrm_system/professionalMembership";

  getAllProMembership(){
    return this.http.get<ViewProfessionalMembership[]>(this.proMembershipUrl);
  }
  getProMembershipByUserId(uid){
    return this.http.get<ViewProfessionalMembership[]>(this.proMembershipUrl+"/"+uid);
  }
  createProMembership(data){
    return this.http.post<ViewProfessionalMembership>(this.proMembershipUrl,data);
  }
}
