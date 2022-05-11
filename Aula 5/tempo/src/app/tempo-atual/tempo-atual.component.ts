import { Component, OnInit } from '@angular/core';
import { ITempoAtual } from '../interfaces';

@Component({
  selector: 'app-tempo-atual',
  templateUrl: './tempo-atual.component.html',
  styleUrls: ['./tempo-atual.component.scss']
})
export class TempoAtualComponent implements OnInit {

  tempoAtual: ITempoAtual
  constructor() {
    this.tempoAtual = {
      cidade: 'São Paulo',
      pais: 'Brasil',
      date: '01/01/2020',
      descricao: 'Ensolarado',
      temperatura: 20,
      image: 'assets/img/ensolarado.svg'
    }
  }

  ngOnInit(): void {
  }

}
