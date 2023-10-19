import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

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

  constructor(private http: HttpClient, private apiService: ApiService) {}
  requestOptions: Object = {
    headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'json',
};

  register() {
    let bodyData = {
      name: this.name,
      email: this.email,
      mobileNo: this.mobileNo,
      password: this.password,
    };
   
    // this.apiService.makePostAPI('createUser', bodyData).subscribe((response => {
    //   console.log(response);
    //   alert('Registered Successfully');
    // }));

    this.http
        .post('https://adishaktiadimayabackend.in/api/createUser', bodyData, this.requestOptions)
      .subscribe((resultData: any) => {
        console.log(resultData);
       
        alert('Registered Successfully');

        this.name, this.email, this.mobileNo, this.password;
      });
  }
}
