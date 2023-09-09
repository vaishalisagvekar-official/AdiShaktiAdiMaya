import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router, private http: HttpClient) {}
  requestOptions: Object = {
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'json',
};
  login() {
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post('https://adishaktiadimayabackend.in/api/userLogin', bodyData, this.requestOptions)
      .subscribe((resultData: any) => {
        if (resultData.status == 1) {
          this.router.navigateByUrl('/home');
          const login: any = this.isLogin;
          sessionStorage.setItem('isLogin', login);
          var userData = JSON.stringify(resultData.data);
          sessionStorage.setItem('userDetails', userData);
        } else {
          alert('Incorrect email or password');
        }
      });
  }
}
