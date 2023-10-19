import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseAPI = 'https://adishaktiadimayabackend.in/api/';
  // baseAPI = "http://192.168.43.193:80/api/"

  constructor(private http: HttpClient) { }

  requestOptions: Object = {
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'json',
  };


  makePostAPI(endPoint:string, body: any): Observable<any>{
    return this.http.post(this.baseAPI + endPoint, body, this.requestOptions);
  }

  makeGetAPI(endPoint:string){
    return this.http.get<any>(this.baseAPI + endPoint, this.requestOptions);
  }

  makePutAPI(endPoint:string, body: any): Observable<any>{
    return this.http.put(this.baseAPI + endPoint, body, this.requestOptions);
  }
}
