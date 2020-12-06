import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthHeaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // logic
        console.log('Auth Interceptor Provider');
        console.log(request.url);
        const authToken = "My Auth Token";
        const authReq = request.clone({
            setHeaders: { Authorization: authToken }
        })
        return next.handle(authReq);
        // return next.handle(request);
    }
}