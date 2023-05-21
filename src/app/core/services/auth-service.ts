import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  isAdmin: boolean = false;
  baseUrl = 'https://fakestoreapi.com';
  isOrgHasActiveMembers: boolean = false

  constructor(
    private router: Router) { }

  setUserToken(token: any) {
    debugger;
    localStorage.setItem('userToken', token);
    this.isAuth = true;
    this.checkUserAuth();
  }
  setUserObj(userObj: any) {
    localStorage.setItem('userObj', JSON.stringify(userObj));
    userObj?.role == 'admin' ? this.isAdmin = true : this.isAdmin = false;
  }
  checkUserAuth() {
    debugger;
    if (this.getUserToken()) {
      this.isAuth = true;
      const userObj: any = this.getUserObj();
      userObj?.role == 'admin' ? this.isAdmin = true : this.isAdmin = false;
    }
  }

  signOut(redirectToLogin = true) {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userObj');

    this.isAuth = false;
    if (redirectToLogin) {
      this.router.navigate(['/auth/signin'])
    }
  }

  getUserToken() {
    return localStorage.getItem('userToken');
  }
  getUserObj() {
    if (localStorage.getItem('userObj')) {
      return JSON.parse(localStorage.getItem('userObj') || '')
    }
    return {};
  }

  isUserAuth() {
    return this.isAuth;
  }

}
