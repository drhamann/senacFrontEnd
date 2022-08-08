import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/tempo-atual', pathMatch: 'full' },
  { path: 'tempo', component: TempoAtualComponent },
  { path: 'busca', component: BuscaCidadeComponent },
  { path: 'poluicao', loadChildren: () => import('./modulos/poluicao/poluicao.module').then(m => m.PoluicaoModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
