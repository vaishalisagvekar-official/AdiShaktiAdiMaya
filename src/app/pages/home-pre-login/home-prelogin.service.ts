import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomePreloginService {

  constructor(private apiService: ApiService) { }

  getAllNews(): Observable<any> {
    return this.apiService.makeGetAPI('getNews');
  }
}
