import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    this.authService.checkUserAuth();
    if (this.authService.isUserAuth()) {
      if (this.authService.isAdmin) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home'])
      }
      return false;
    } else {
      return true;
    }
  }

}
