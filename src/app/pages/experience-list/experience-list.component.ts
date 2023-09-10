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
  isShow = false
  items: any[] = [];
  approvedExperiences: any[] = [];
  nonApprovedExperiences: any[] = [];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 3
  },
    {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '700px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(
    private http: HttpClient,
    public experienceListService: ExperienceListService,
    public sessionStorageService: SessionStorageService
  ) {}

  ngOnInit() {
    console.log(this.sessionStorageService.isAdmin());
    
    this.experienceListService.getAllItems().subscribe((response) => {
      console.log(response);
      
      if (response) {
        if (Array.isArray(response)) {
          this.items = response;
          this.approvedExperiences = this.items.filter((experience:any)=> experience.isApproved)
          this.nonApprovedExperiences = this.items.filter((experience:any)=> !experience.isApproved)
          console.log(this.nonApprovedExperiences);
          
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
