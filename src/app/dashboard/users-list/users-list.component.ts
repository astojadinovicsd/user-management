import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../state/user.model';
import { UsersQuery } from '../state/users.query';
import { UsersService } from '../state/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  usersCount$: Observable<number>;
  activeUsersCount$: Observable<number>;

  constructor(
    private usersQuery: UsersQuery,
    private usersService: UsersService
  ) {
    this.users$ = this.usersQuery.selectAll();
    this.usersCount$ = this.usersQuery.selectCount();
    this.activeUsersCount$ = this.usersQuery.selectCount(
      ({ active }) => active
    );

    this.users$.subscribe(users => console.log(users, 'aaaa'));
  }

  ngOnInit() {
    this.usersService.get();
  }

  onUserActiveToggled(user: User) {
    this.usersService.update(user.id, { active: !user.active });
  }

  addUser() {}
}
