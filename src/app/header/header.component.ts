import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogin: any;

  constructor(public router: Router) {}

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
  }

  removeSessionData(){
    sessionStorage.removeItem('isLogin');
    sessionStorage.removeItem('userDetails');
  }
}
