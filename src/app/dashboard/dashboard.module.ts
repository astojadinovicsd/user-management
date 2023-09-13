import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [],
  declarations: [DashboardComponent, UsersListComponent],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
