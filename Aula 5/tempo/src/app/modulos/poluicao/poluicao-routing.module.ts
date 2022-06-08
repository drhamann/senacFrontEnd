import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';
import { NotFoundComponent } from '../../not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/poluicao/home', pathMatch: 'full' },
  { path: 'home', component: PoluicaoHomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoluicaoRoutingModule { }
