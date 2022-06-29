import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersHomeComponent } from './users-home/users-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/home', pathMatch: 'full' },
  { path: 'home', component: UsersHomeComponent },
  { path: 'home', component: UsersHomeComponent },
  { path: 'edit', component: UsersEditComponent },
  { path: 'create', component: UsersCreateComponent },
  { path: '**', component: NotfoundComponent }
];
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
