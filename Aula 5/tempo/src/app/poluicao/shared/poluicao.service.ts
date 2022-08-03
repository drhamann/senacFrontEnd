import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IPoluitionData } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import { Coordenadas, ICurrentWeatherData, ITempoAtual } from '../interfaces';
import { LocalStorageService, StorageKeys } from '../local-storage.service';
import { IPoluicao, List } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  tempoAtual: BehaviorSubject<ITempoAtual> = new BehaviorSubject<ITempoAtual>({
    cidade: '',
    pais: '',
    date: Date.now().toLocaleString(),
    descricao: '',
    temperatura: 0,
    image: ''
  })

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    let { cidade, pais } = this.retorneUltimaBusca();
    this.getCurrentWeather(cidade, pais).subscribe(data => this.tempoAtual.next(data))
  }

  private retorneUltimaBusca() {
    let cidade = this.localStorageService.get(StorageKeys.CIDADE);
    cidade = cidade ? cidade : 'Lages';
    let pais = this.localStorageService.get(StorageKeys.PAIS);
    pais = pais ? pais : 'Brasil';
    this.tempoAtual.value.cidade = cidade;
    this.tempoAtual.value.pais = pais;
    return { cidade, pais };
  }

  getDefaulttWeather(): Observable<ITempoAtual> {
    return this.getCurrentWeather(this.tempoAtual.value.cidade, this.tempoAtual.value.pais)
  }

  getCurrentWeather(busca: string | number, pais?: string): Observable<ITempoAtual> {
    let uriParams = ''
    if (typeof busca === 'string') {
      uriParams = `q=${busca}`
    } else {
      uriParams = `zip=${busca}`
    }
    if (pais) {
      uriParams = `${uriParams},${pais}`
    }
    return this.getCurrentWeatherHelper(uriParams)
  }

  getCurrentWeatherByCoords(coords: Coordenadas): Observable<ITempoAtual> {
    const uriParams = `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }


  private transformToITempoAtual(data: IPoluitionData): IPoluicao {
    console.log(data)
    return {
      qualidadeDoAr: data.list[0].main.aqi.toString(),
      co: data.list[0].components.co,

    }
  }
}

