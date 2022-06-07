import { Component } from '@angular/core';
import { ITempoAtual } from './interfaces';
import { TempoService } from './tempo/tempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tempoAtual!: ITempoAtual
  constructor(private tempoService: TempoService) {
    this.tempoService.getDefaulttWeather().subscribe(data => this.tempoAtual = data)
  }
}
