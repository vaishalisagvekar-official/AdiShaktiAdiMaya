import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceListService {
  constructor(private http: HttpClient) {}
   //get all experience list
  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://16.16.56.66:80/api/fetchExperienceData'
    );
  }

  // Update an experience item's "approved" status by ID
  approveItemById(itemId: string): Observable<any> {
    const url = `http://16.16.56.66:80/api/approveExperience/${itemId}`;
    return this.http.put<any>(url, {});
  }
}
