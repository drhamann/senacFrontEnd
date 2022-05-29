import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { TempoService } from '../tempo/tempo.service';

@Component({
  selector: 'app-busca-cidade',
  templateUrl: './busca-cidade.component.html',
  styleUrls: ['./busca-cidade.component.scss']
})
export class BuscaCidadeComponent implements OnInit {

  busca = new FormControl('', [Validators.minLength(2)])
  @Output() eventoDeBusca = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.busca.valueChanges.pipe(debounceTime(1000)).subscribe((valorDaBusca: string) => {
      if (!this.busca.invalid) {
        this.eventoDeBusca.emit(valorDaBusca)
      }
    })
  }
  /*if (valorDaBusca) {
    const valorDoInput = valorDaBusca.split(',').map(letra => letra.trim())
    this.tempoService.getCurrentWeather(valorDoInput[0], valorDoInput.length > 1 ? valorDoInput[1] : undefined).pipe(debounceTime(1000))
      .subscribe(data => (console.log(data)))
  }*/

}
