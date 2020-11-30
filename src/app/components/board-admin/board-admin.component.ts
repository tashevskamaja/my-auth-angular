/* this component is role-based. But authorization will be processed by back-end.
We only need to call UserService method: getAdminBoard() */

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  content = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
