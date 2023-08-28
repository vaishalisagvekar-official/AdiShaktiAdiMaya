import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class ExperienceComponent {
  name: any;
  experience: any;
  constructor(private http: HttpClient) {}
  submit() {
    let bodyData = {
      name: this.name,
      experience: this.experience,
    };
    this.http
      .post('https://192.168.78.91:8443/api/createExperience', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Data Saved Successfully');

        this.name, this.experience;
      });
  }
}
