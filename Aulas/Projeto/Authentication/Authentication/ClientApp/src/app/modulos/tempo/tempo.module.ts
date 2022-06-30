import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempoRoutingModule } from './tempo-routing.module';
import { TempoHomeComponent } from './tempo-home/tempo-home.component';
import { TempoEditComponent } from './tempo-edit/tempo-edit.component';
import { TempoCreateComponent } from './tempo-create/tempo-create.component';


@NgModule({
  declarations: [
    TempoHomeComponent,
    TempoEditComponent,
    TempoCreateComponent
  ],
  imports: [
    CommonModule,
    TempoRoutingModule
  ]
})
export class TempoModule { }
