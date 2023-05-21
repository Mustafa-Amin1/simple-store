import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    this.authService.checkUserAuth();
    if (this.authService.isUserAuth()) {
      return true;
    }

    //  in case of un auth user
    this.router.navigate(['/auth/signin'])
    return false;
  }
  canLoad(): boolean {
    this.authService.checkUserAuth();
    if (this.authService.isUserAuth()) {
      return true;
    }

    //  in case of un auth user
    this.router.navigate(['/auth/signin'])
    return false;
  }

}
