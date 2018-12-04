import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestPromotion } from '../models/request-promotion';
import { Department } from '../models/department';
import { Designation } from '../models/designation';

@Injectable({
  providedIn: 'root'
})
export class RequestPromotionService {
  constructor(private http: HttpClient) { }

  private RequestPromotiontUrl = 'http://localhost:8080/hrm_system/requestpromotion';
  private depUrl='http://localhost:8080/hrm_system/department';
  private desigUrl='http://localhost:8080/hrm_system/designation';
  private reqproUrl='http://localhost:8080/hrm_system/requestpromotionsave';

  
  public getAllPromotionRequest() {
    return this.http.get<RequestPromotion[]>(this.RequestPromotiontUrl);
  }

  public getPromotionRequestById(id) {
    return this.http.get<RequestPromotion[]>(this.RequestPromotiontUrl + "/id/" + id);
  }
  public postPromotionRequest(reqpro) {
    return this.http.post<RequestPromotion>(this.reqproUrl, reqpro);
  }

  public deletePromotionRequest(reqpro) {
    return this.http.delete<RequestPromotion>(this.RequestPromotiontUrl + '/' + reqpro.id, reqpro);
  }
  public updatePromotionRequest(reqpro) {
    return this.http.put<RequestPromotion>(this.RequestPromotiontUrl + '/' + reqpro.id, reqpro);
  }
  public getAllDepartment() {
    return this.http.get<Department[]>(this.depUrl);
  }
  public getAllDesignation() {
    return this.http.get<Designation[]>(this.desigUrl);
  }
}