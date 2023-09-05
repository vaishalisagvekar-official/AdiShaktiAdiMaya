import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceListService } from './experience-list.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
})
export class ExperienceListComponent implements OnInit {
  @Input() pageName: any;
  isShow = false
  items: any[] = [];
  srNo: any;
  constructor(
    private http: HttpClient,
    public experienceListService: ExperienceListService
  ) {}

  ngOnInit() {
    this.experienceListService.getAllItems().subscribe((response) => {
      console.log(response);
    
      if (response) {
        for(let i=0; i > response.length; i++){
          this.items = response[i];
        }
      
      }
    });
  }

  approveItem(itemId: string) {
    this.experienceListService.approveItemById(itemId).subscribe((response) => {
      if(response.item.isApproved == true){
        this.isShow == false
      }
    });
  }
}
