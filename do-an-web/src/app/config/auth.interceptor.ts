import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtHelperService: JwtHelperService,
              private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token && this.jwtHelperService.isTokenExpired(token, new Date().getTime())){
      request = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')});
    }
    return next.handle(request);
  }
}
