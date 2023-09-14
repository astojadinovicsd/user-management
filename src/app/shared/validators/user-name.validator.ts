import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/dashboard/state/users.service';

export function userNameValidator(
  usersService: UsersService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return timer(500).pipe(
      switchMap(() =>
        usersService
          .checkIfUsernameExists(control.value)
          .pipe(
            map((result: boolean) =>
              result ? { usernameAlreadyExists: true } : null
            )
          )
      )
    );
  };
}
