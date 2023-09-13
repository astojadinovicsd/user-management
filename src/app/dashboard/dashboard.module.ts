import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    TableModule,
    CommonModule,
    InputSwitchModule,
    FormsModule,
    ButtonModule,
  ],
  declarations: [DashboardComponent, UsersListComponent],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
