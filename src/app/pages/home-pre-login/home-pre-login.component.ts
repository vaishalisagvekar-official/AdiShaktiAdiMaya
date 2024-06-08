import { Component } from '@angular/core';
import { HomePreloginService } from './home-prelogin.service';

@Component({
  selector: 'app-home-pre-login',
  templateUrl: './home-pre-login.component.html',
  styleUrls: ['./home-pre-login.component.css'],
})
export class HomePreLoginComponent {
    pageName = 'HomePreLogin'  
    constructor(private homePreloginService: HomePreloginService){}

    ngOnInit(){
      this.getNews();
    }

    getNews(){
      this.homePreloginService.getAllNews().subscribe((response: any) => {  
        console.log(response);
            
        if (response?.status == 1) {
          console.log(response.data);
          
          // if (Array.isArray(response.data)) {
          //   this.items = response?.data;
          //   this.approvedExperiences = this.items.filter((experience:any)=> experience.isApproved)
          //   this.nonApprovedExperiences = this.items.filter((experience:any)=> !experience.isApproved)
          //   console.log(this.nonApprovedExperiences);
            
          // }
        }
      });
    }
}
