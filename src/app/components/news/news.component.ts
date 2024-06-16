import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(public newsService: NewsService){

  }
  ngOnInit(){
    this.getNews();
  }

  getNews(){
    this.newsService.getAllNews().subscribe((response: any) => {              
      if (response?.status == 1) {          
        if (Array.isArray(response.data)) {
          let latestNews = response.data;
          this.newsService.news = latestNews ? latestNews : [];
        }
        else {}
      }
    });
  }
}
