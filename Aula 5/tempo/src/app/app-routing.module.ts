import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';

const routes: Routes = [
  { path: '', component: TempoAtualComponent },
  { path: 'tempo', component: TempoAtualComponent },
  { path: 'busca', component: BuscaCidadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
