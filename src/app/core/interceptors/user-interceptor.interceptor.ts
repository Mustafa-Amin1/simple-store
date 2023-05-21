import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpContextToken,
} from '@angular/common/http';
import { AuthService } from '../services/auth-service';


export const BYPASS_LOG = new HttpContextToken(() => false)
@Injectable()
export class UserInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.context.get(BYPASS_LOG) === true) {
      return next.handle(req);

    }
    else {
      const AuthToken = this.authService.getUserToken();

      const authRequest = req.clone({
        headers: req.headers.append('Authorization', 'Bearer ' + AuthToken),
      });
      return next.handle(authRequest);
    }

  }
}
