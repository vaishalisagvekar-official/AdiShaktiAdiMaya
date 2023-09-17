import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../services/storage/session-storage.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isLogin: any;
  
  constructor(public router: Router,
    public sessionStorageService: SessionStorageService) {
      
    }

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('isLogin');
    this.isHeaderShow();
  }

  isHeaderShow() {
    if (this.isLogin) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  logout() {
    this.removeSessionData()
    this.router.navigate(['/home-pre-login']);
    this.isLogin = false;
  }

  removeSessionData(){
    sessionStorage.removeItem('isLogin');
    sessionStorage.removeItem('userDetails');
  }
}
