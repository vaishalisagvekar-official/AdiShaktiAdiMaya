import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../loading-service/loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const uniqueLoaderId = String(Math.random());
    this.loadingService.showLoader(uniqueLoaderId);
    return next.handle(req).pipe(finalize(() => this.loadingService.hideLoader(uniqueLoaderId)));
  }
}
