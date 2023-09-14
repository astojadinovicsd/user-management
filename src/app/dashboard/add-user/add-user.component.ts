import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { guid } from '@datorama/akita';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { userNameValidator } from 'src/app/shared/validators/user-name.validator';
import { UsersService } from '../state/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  addUserform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dynamicDialogRef: DynamicDialogRef,
    private usersService: UsersService
  ) {
    this.addUserform = this.fb.group({
      name: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [userNameValidator(this.usersService)],
          updateOn: 'change',
        },
      ],
      active: [false],
    });
  }

  addUser() {
    const formData = this.addUserform.getRawValue();
    this.usersService.add({
      id: guid(),
      name: formData.name,
      active: formData.active,
    });

    this.closeDialog();
  }

  closeDialog() {
    this.dynamicDialogRef.close();
  }
}
