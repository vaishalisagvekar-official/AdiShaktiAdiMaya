import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  mobileNo: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register() {
    let bodyData = {
      name: this.name,
      email: this.email,
      mobileNo: this.mobileNo,
      password: this.password,
    };
    this.http
        .post('http://16.16.56.66:80/api/createUser', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
       
        alert('Registered Successfully');

        this.name, this.email, this.mobileNo, this.password;
      });
  }
}
