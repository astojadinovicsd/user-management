import { Injectable } from '@angular/core';
import { ID, guid } from '@datorama/akita';
import { delay, of } from 'rxjs';
import { User } from './user.model';
import { UsersQuery } from './users.query';
import { UsersStore } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersService {
  mockedUsers: User[] = [
    { name: 'Petar Petrovic', active: true, id: guid() },
    { name: 'Marko Markovic', active: false, id: guid() },
    { name: 'Jovan Jovanovic', active: false, id: guid() },
  ];

  constructor(
    private usersStore: UsersStore,
    private usersQuery: UsersQuery
  ) {}

  get() {
    return of([...this.mockedUsers])
      .pipe(delay(300))
      .subscribe(entities => this.usersStore.set(entities));
  }

  add(user: User) {
    this.usersStore.add(user);
  }

  update(id: ID, user: Partial<User>) {
    this.usersStore.update(id, user);
  }

  remove(id: ID) {
    this.usersStore.remove(id);
  }

  checkIfUsernameExists(value: string) {
    const userNames = this.usersQuery.getAll().map(user => user.name);
    return of(
      userNames.some(a => a.toLocaleUpperCase() === value.toLocaleUpperCase())
    ).pipe(delay(300));
  }
}
