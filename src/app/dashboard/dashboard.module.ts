import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ProgressSpinnerModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
  ],
  declarations: [DashboardComponent, UsersListComponent, AddUserComponent],
  exports: [DashboardComponent],
  providers: [DialogService],
})
export class DashboardModule {}
