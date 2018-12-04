import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddDeniedPromotion } from '../models/add-denied-promotion';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable({
  providedIn: 'root'
})


export class AddDeniedPromotionService {

  constructor(private httpObj:HttpClient) { }
  private DeniedPromotionUrl="http://localhost:8080/hrm_system/denied";

  getAllDeniedPromotion(){
    return this.httpObj.get<AddDeniedPromotion[]>("http://localhost:8080/hrm_system/deniedpro");
  }

  createDeniedPromotion(data){
    return this.httpObj.post<AddDeniedPromotion[]>(this.DeniedPromotionUrl, data);
  }

  updateDeniedPromotion(data){
    return this.httpObj.put<AddDeniedPromotion[]>(this.DeniedPromotionUrl + "/"+ data.id,data);
  }

  deleteDeniedPromotion(data){
    return this.httpObj.delete<AddDeniedPromotion[]>(this.DeniedPromotionUrl + "/" + data.id);
  }


}
