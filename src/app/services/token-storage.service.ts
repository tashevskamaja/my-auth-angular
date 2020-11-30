// this service manages token and user information (username, email, roles)

import { Injectable } from '@angular/core';

const tokenKey = 'auth-token';
const userKey = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(tokenKey);
    window.sessionStorage.setItem(tokenKey, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(tokenKey);
  }

  public saveUser(user: any) {
    window.sessionStorage.removeItem(userKey);
    window.sessionStorage.setItem(userKey, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(userKey) || '{}');
  }
}
