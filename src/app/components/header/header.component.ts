import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public sessionStorageService: SessionStorageService,
    private activatedRoute: ActivatedRoute) {
      
    }

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('isLogin');
    this.isHeaderShow();

    this.activatedRoute.fragment.subscribe((fragment: string | null) => {      
      if (fragment) this.jumpToSection(fragment);
    });
  }

  jumpToSection(section: string | null) {
    setTimeout(() => {
      if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 100)
    
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
