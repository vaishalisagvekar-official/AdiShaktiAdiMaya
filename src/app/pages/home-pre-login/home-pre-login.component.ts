import { Component } from '@angular/core';
import { HomePreloginService } from './home-prelogin.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-home-pre-login',
  templateUrl: './home-pre-login.component.html',
  styleUrls: ['./home-pre-login.component.css'],
})
export class HomePreLoginComponent {
    pageName = 'HomePreLogin'  
}
