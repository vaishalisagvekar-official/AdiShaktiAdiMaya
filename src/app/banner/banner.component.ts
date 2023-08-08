import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  selectedImage: File | null = null;
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedImage) {
      try {
        this.uploadBannerImage(this.selectedImage).subscribe(
          (response) => {
            console.log('Image uploaded successfully');
          },

          (error) => {
            console.error('Error uploading image', error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.warn('No image selected.');
    }
  }

  uploadBannerImage(imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post<any>('http://localhost:3000/api/uploadBanner', formData);
  }
}
