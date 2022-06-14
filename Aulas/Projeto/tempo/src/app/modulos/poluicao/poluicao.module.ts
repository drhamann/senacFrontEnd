import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoluicaoRoutingModule } from './poluicao-routing.module';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';


@NgModule({
  declarations: [
    PoluicaoHomeComponent
  ],
  imports: [
    CommonModule,
    PoluicaoRoutingModule
  ]
})
export class PoluicaoModule { }
