import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { TempoService } from './tempo/tempo.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    TempoAtualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TempoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
