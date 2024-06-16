import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  heading: any;
  content: any;
  constructor(private apiService: ApiService) {}

  submit() {
    let bodyData = {
      heading: this.heading,
      content: this.content,
    };
    this.apiService.makePostAPI('addNews', bodyData).subscribe((response => {
      if (response.status == 1) {
        alert('News added successfully!!');
        this.heading = "";
        this.content = "";
      } else {
        alert('Failed to add news. Please try after sometime.');
      }
    }));
  }
}
