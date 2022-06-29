import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersCreateComponent } from './users-create/users-create.component';


@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersEditComponent,
    UsersCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
