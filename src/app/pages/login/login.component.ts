import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: String = '';
  password: String = '';

  isLogin: boolean = true;
  errorMessage: String = '';
  constructor(private router: Router, private apiService: ApiService) {}
  requestOptions: Object = {
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'json',
};
  login() {
    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.apiService.makePostAPI('userLogin', bodyData).subscribe((response => {
      if (response.status == 1) {
        this.router.navigateByUrl('/home');
        const login: any = this.isLogin;
        sessionStorage.setItem('isLogin', login);
        var userData = JSON.stringify(response.data);
        sessionStorage.setItem('userDetails', userData);
      } else {
        alert('Incorrect email or password');
      }
    }));
  }
}
