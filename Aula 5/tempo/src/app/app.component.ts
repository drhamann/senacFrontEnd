import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { TempoService } from './tempo/tempo.service';
import { ITempoAtual } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tempoAtual!: ITempoAtual
  constructor(private tempoService: TempoService) { }
  ngOnInit(): void {
    this.tempoService.getCurrentWeather('Lages', 'Brasil').subscribe((data) => this.tempoService.tempoAtual.next(data))
  }
  /*realizarBusca(valorDaBusca: string) {
    if (valorDaBusca) {
      const valorDoInput = valorDaBusca.split(',').map(letra => letra.trim())
      this.tempoService.getCurrentWeather(valorDoInput[0], valorDoInput.length > 1 ? valorDoInput[1] : undefined).pipe(debounceTime(1000))
        .subscribe(data => (this.tempoAtual = data))
    }
  }*/
}
S
