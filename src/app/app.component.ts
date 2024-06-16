import { Component } from '@angular/core';
import { HomePreloginService } from './pages/home-pre-login/home-prelogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home';

  constructor(public homePreloginService: HomePreloginService) {
  }

  ngOnInit() {}

  ngAfterViewInit(){
    this.displayNewsOnScrollToTop();
  }

  displayNewsOnScrollToTop(){
    document.getElementById('whole-content')?.addEventListener('scroll', (event) => {
      let scrollPosition = document.getElementById('whole-content')?.scrollTop;
      scrollPosition = scrollPosition ? scrollPosition : 0;
      if (scrollPosition >= 40) {
        (document.getElementsByTagName('app-header')[0] as any).style.top = 0;
      } else {
        (document.getElementsByTagName('app-header')[0] as any).style.top = "auto";
      }
   });
  }

  
}
