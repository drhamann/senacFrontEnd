import { Component, Input, OnInit } from '@angular/core';
import { ITempoAtual } from '../interfaces';
import { TempoService } from '../tempo/tempo.service';

@Component({
  selector: 'app-tempo-atual',
  templateUrl: './tempo-atual.component.html',
  styleUrls: ['./tempo-atual.component.scss']
})
export class TempoAtualComponent implements OnInit {
  constructor(private tempoService: TempoService) { }
  ngOnInit(): void { this.tempoService.tempoAtual.subscribe(data => (this.tempo = data)) }

  tempo!: ITempoAtual
  // @Input()
}
