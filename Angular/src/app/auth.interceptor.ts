import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './service/authservice.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthserviceService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.isAuthenticated()?.accessToken;
    if (!accessToken) return next.handle(request);

    const modifyReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return next.handle(modifyReq);
  }
}