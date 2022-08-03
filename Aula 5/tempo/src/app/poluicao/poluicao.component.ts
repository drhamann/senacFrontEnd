import { Component, OnInit } from '@angular/core';
import { IPoluicao } from '../interfaces';

@Component({
  selector: 'app-poluicao',
  templateUrl: './poluicao.component.html',
  styleUrls: ['./poluicao.component.scss']
})
export class PoluicaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  poluicao!: IPoluicao;
}
