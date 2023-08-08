
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(private router: Router){

  }
  canActivate() {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['HomePreLogin']);
      return false;
    }
  }

  isLoggedIn = () => {
    return !!sessionStorage.getItem('isLogin');
};
}
