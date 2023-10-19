import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ExperienceListService {
  constructor(private apiService: ApiService) {}
   //get all experience list
  getAllItems(): Observable<any> {
    return this.apiService.makeGetAPI('fetchExperienceData');
  }

  // Update an experience item's "approved" status by ID
  approveItemById(itemId: string): Observable<any> {
    return this.apiService.makePutAPI(`approveExperience/${itemId}`, {});
  }
}
