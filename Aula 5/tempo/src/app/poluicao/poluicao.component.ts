import { Component, OnInit } from '@angular/core';
import { IPoluicao } from '../interfaces';
import { PoluicaoService } from './shared/poluicao.service';

@Component({
  selector: 'app-poluicao',
  templateUrl: './poluicao.component.html',
  styleUrls: ['./poluicao.component.scss']
})
export class PoluicaoComponent {
  poluicao!: IPoluicao;
  constructor(private poluicaoService: PoluicaoService) {
    this.poluicaoService.poluicao.subscribe(data => (this.poluicao = data));
  }
}

