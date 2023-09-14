import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';
import { User } from '../state/user.model';
import { UsersQuery } from '../state/users.query';
import { UsersService } from '../state/users.service';

@Component({
  selector: 'app-users-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  usersCount$: Observable<number>;
  activeUsersCount$: Observable<number>;

  constructor(
    private usersQuery: UsersQuery,
    private usersService: UsersService,
    private dialogService: DialogService
  ) {
    this.users$ = this.usersQuery.selectAll();
    this.usersCount$ = this.usersQuery.selectCount();
    this.activeUsersCount$ = this.usersQuery.selectCount(
      ({ active }) => active
    );
  }

  ngOnInit() {
    this.usersService.get();
  }

  onUserActiveToggled(user: User) {
    this.usersService.update(user.id, { active: !user.active });
  }

  addUser() {
    this.dialogService.open(AddUserComponent, {
      header: 'Add user',
      width: '500px',
    });
  }
}
