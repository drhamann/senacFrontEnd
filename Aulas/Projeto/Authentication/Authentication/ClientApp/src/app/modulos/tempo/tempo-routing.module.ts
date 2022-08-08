import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempoHomeComponent } from './tempo-home/tempo-home.component';
import { TempoEditComponent } from './tempo-edit/tempo-edit.component';
import { TempoCreateComponent } from './tempo-create/tempo-create.component';
import { NotfoundComponent } from '../../notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TempoHomeComponent },
  { path: 'edit', component: TempoEditComponent },
  { path: 'create', component: TempoCreateComponent },
  { path: '**', component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempoRoutingModule { }
