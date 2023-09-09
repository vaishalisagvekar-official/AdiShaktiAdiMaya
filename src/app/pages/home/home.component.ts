import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../../services/storage/session-storage.service';

interface Image {
  filename: string;
  originalName: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageName = 'Home';
  isAdmin = false;
  images: Image[] = [];
  constructor(private http: HttpClient,
    public sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    var userDetails: any = sessionStorage.getItem('userDetails');
    const retrievedArray = JSON.parse(userDetails);
    this.isAdmin = retrievedArray.isAdmin;

    // this.getAllImages();
  }

  // getAllImages() {
  //   this.http.get<Image[]>('http://16.16.56.66:80/api/images').subscribe(
  //     (images) => {
  //       this.images = images;
  //     },
  //     (error) => {
  //       console.error('Error retrieving images', error);
  //     }
  //   );
  // }

  getImageUrl(filename: string): string {
    return `/uploads/${filename}`;
  }
}
