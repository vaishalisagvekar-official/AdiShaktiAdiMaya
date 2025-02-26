import { HttpHeaders } from '@angular/common/http';
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

  constructor(private apiService: ApiService) {}

  register() {
    let bodyData = {
      name: this.name,
      email: this.email,
      mobileNo: this.mobileNo,
      password: this.password,
    };
   
    this.apiService.makePostAPI('createUser', bodyData).subscribe((response => {
      console.log(response);
      if (response?.status == 1) {
        alert('New user added successfully!!');
        this.resetForm();
      } else {
        alert("Failed to add new user. Please try after sometime.")
      }
      
    }));
  }

  resetForm(){
    this.name = "";
    this.email = "";
    this.mobileNo = "";
    this.password = "";
  }
}
