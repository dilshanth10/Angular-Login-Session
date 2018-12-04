import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddPromotion } from '../models/add-promotion';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddPromotionService {

  constructor(private httpObj: HttpClient) { }
  baseUrl = "http://localhost:8080/hrm_system/addpromotion";

  public getAddPromotion() {
    return this.httpObj.get<AddPromotion[]>("http://localhost:8080/hrm_system/getpromotion");

  }
  public createAddPromotion(addPromotion) {
    return this.httpObj.post<AddPromotion>("http://localhost:8080/hrm_system/addpromotion", addPromotion);
  }

  public editPromotion(editPromotion) {
    return this.httpObj.put<AddPromotion>("http://localhost:8080/hrm_system/editpromotion" + "/" + editPromotion.id, editPromotion);

  }
}
