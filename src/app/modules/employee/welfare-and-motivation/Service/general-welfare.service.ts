import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GeneralWelfare } from '../Model/general-welfare';

@Injectable({
  providedIn: 'root'
})
export class GeneralWelfareService {

  constructor( private httpObj:HttpClient) { }
  private generalWelfareUrl='http://localhost:8080/hrm_system/generalWelfare';

  getAllGeneralWelfare(){
    return this.httpObj.get<GeneralWelfare[]>(this.generalWelfareUrl);
  }

  createGeneralWelfare(data){
    return this.httpObj.post<GeneralWelfare>(this.generalWelfareUrl,data);
  }

  deleteGeneralWelfare(GeneralWelfare){
    return this.httpObj.delete<GeneralWelfare>(this.generalWelfareUrl+"/"+GeneralWelfare.id,GeneralWelfare);
  }

  updateGeneralWelfare(GeneralWelfare){
    return this.httpObj.put<GeneralWelfare>(this.generalWelfareUrl+"/"+GeneralWelfare.id,GeneralWelfare);
  }
}
