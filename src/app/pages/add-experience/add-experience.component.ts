import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class ExperienceComponent {
  name: any;
  experience: any;
  constructor(private apiService: ApiService) {}

  submit() {
    let bodyData = {
      name: this.name,
      experience: this.experience,
    };
    this.apiService.makePostAPI('createExperience', bodyData).subscribe((response => {
      console.log(response);
      if (response.status == 1) {
        alert('Thank you for sharing your experience!!');
        this.name = "";
        this.experience = "";
      } else {
        alert('Failed to add your experience. Please try after sometime.');
      }
    }));
  }
}
