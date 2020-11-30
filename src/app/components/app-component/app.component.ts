/* This component is the root Component of my app, 
it defines the root tag <app-root></app-root> in index.html. */

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showUserBoard = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  username = '';
  title = 'my-angular-auth';

  constructor(private tokenStorageService: TokenStorageService) {
    this.roles = [];
  }

  // first check isLoggedIn status using TokenStorageService,
  // if it is true, then get user’s roles and set value for
  // showAdminBoard & showModeratorBoard flag.
  // They will control how template navbar displays its items.

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showUserBoard = this.roles.includes('UserBoard');
      this.showAdminBoard = this.roles.includes('RoleAdmin');
      this.showModeratorBoard = this.roles.includes('RoleModerator');

      this.username = user.username;
    }
  }

  // The App Component template also has a Logout button link
  // that call logout() method and reload the window.
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
