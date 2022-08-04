import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { TempoService } from './tempo/tempo.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component'
import { PoluicaoComponent } from './poluicao/poluicao.component';
import { PoluicaoService } from './poluicao/shared/poluicao.service';


@NgModule({
  declarations: [
    AppComponent,
    TempoAtualComponent,
    BuscaCidadeComponent,
    PoluicaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TempoService, PoluicaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
