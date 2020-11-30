// this service sends signup, login HTTP POST requests to back-end

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const authApi = 'http://localhost:4200/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(authApi + 'signin' , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post(authApi + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
