import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url = 'http://localhost:3000/';
  endPoint: any;
  signinOrSignUp: any;
  ownerName: any;
  Data: any;
  editId!: number;
  editJourney: boolean = false;
  hotelDetailsById: any;

  constructor(private http: HttpClient) {
  }

  postApiCall(endPoint: any, data: any) {
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl, data)
  }
  getApiCall(endPoint: any, id?:any) {
    let updateUrl = id ? this.url + endPoint + '/' + id : this.url + endPoint;
    return this.http.get(updateUrl);
  }
  deleteApiCall(endPoint: string, id:number){
    let updateUrl = this.url + endPoint + '/' + id;
    return this.http.delete(updateUrl);
  }
 patchApiCall(endPoint: string, Data:any, id:number){
  let updateUrl = this.url + endPoint + '/' + id;
  return this.http.patch(updateUrl,Data)
 }

 


} 
