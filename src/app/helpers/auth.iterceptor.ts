// AuthInterceptor implements HttpInterceptor
// HttpInterceptor has intercept() method to inspect and transform HTTP requests before they are sent to server.

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';

const tokenHeaderKey = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    /* intercept() gets HTTPRequest object, change it and forward to 
    HttpHandler object’s handle() method. 
    It transforms HTTPRequest object into an Observable<HttpEvents>. */
    // next: HttpHandler object represents the next interceptor in the chain of interceptors.
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(tokenHeaderKey, 'Bearer' + token) });
        }
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]