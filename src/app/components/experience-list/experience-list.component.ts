import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceListService } from './experience-list.service';
import { SessionStorageService } from '../../services/storage/session-storage.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
})
export class ExperienceListComponent implements OnInit {
  @Input() pageName: any;
  items: any[] = [];
  approvedExperiences: any[] = [];
  nonApprovedExperiences: any[] = [];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 3,
      autoPlayInterval: 1000
  },
    {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 3,
        autoPlayInterval: 1000
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2,
        autoPlayInterval: 1000
    },
    {
        breakpoint: '700px',
        numVisible: 1,
        numScroll: 1,
        autoPlayInterval: 1000
    }
];

  constructor(
    public experienceListService: ExperienceListService,
    public sessionStorageService: SessionStorageService
  ) {}

  ngOnInit() {
    this.getAllExperience();
  }

  getAllExperience(){
    this.experienceListService.getAllItems().subscribe((response: any) => {      
      if (response?.status == 1) {
        if (Array.isArray(response.data)) {
          this.items = response?.data;
          this.approvedExperiences = this.items.filter((experience:any)=> experience.isApproved)
          this.nonApprovedExperiences = this.items.filter((experience:any)=> !experience.isApproved)
          console.log(this.nonApprovedExperiences);
          
        }
      }
    });
  }

  approveItem(itemId: string) {
    this.experienceListService.approveItemById(itemId).subscribe((response: any) => {
      if (response?.status == 1) {
        if(response?.data?.isApproved == true){
          this.getAllExperience();
        }
      } else {
        alert("Failed to approve experience. Please try after sometime")
      }
    });
  }
}
