import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { WelfareEvent } from '../Model/welfare-event';
@Injectable({
  providedIn: 'root'
})
export class WelfareEventService {

  
  constructor( private httpObj:HttpClient) { }
  private welfareEventUrl='http://localhost:8080/hrm_system/welfareEvent';

  getAllWelfareEvent(){
    return this.httpObj.get<WelfareEvent[]>(this.welfareEventUrl);
  }

  createWelfareEvent(data){
    return this.httpObj.post<WelfareEvent>(this.welfareEventUrl,data);
  }

  deleteWelfareEvent(leavetype){
    return this.httpObj.delete<WelfareEvent>(this.welfareEventUrl+"/"+leavetype.id,leavetype);
  }

  updateWelfareEvent(leavetype){
    return this.httpObj.put<WelfareEvent>(this.welfareEventUrl+"/"+leavetype.id,leavetype);
  }


}
