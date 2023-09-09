import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  getUser(){
    var userDetails: any = sessionStorage.getItem('userDetails');
    return JSON.parse(userDetails);
  }
  isAdmin(){
    return this.getUser()?.isAdmin;
  }
  getUserName(){
    return this.getUser()?.name;
  }
  
}
