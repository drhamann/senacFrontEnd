import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-busca-cidade',
  templateUrl: './busca-cidade.component.html',
  styleUrls: ['./busca-cidade.component.scss']
})
export class BuscaCidadeComponent implements OnInit {

  busca = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }

}
