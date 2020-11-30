/* this component is role-based. But authorization will be processed by back-end.
We only need to call UserService method: getModeratorBoard() */

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css'],
})
export class BoardModeratorComponent implements OnInit {
  content = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
