import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coordenadas, ICurrentWeatherData, ITempoAtual } from '../interfaces';

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

  constructor(private httpClient: HttpClient) { }

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

  private getCurrentWeatherHelper(uriParams: string): Observable<ITempoAtual> {
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appId}`)
      .pipe(map(data => this.transformToITempoAtual(data)))
  }

  getCurrentWeatherByCoords(coords: Coordenadas): Observable<ITempoAtual> {
    const uriParams = `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }

  /*getCurrentWeather(city: string, country: string): Observable<ITempoAtual> {
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
      `q=${city},${country}&appid=${environment.appId}`
    ).pipe(map(data => this.transformToITempoAtual(data)))
  }*/

  private transformToITempoAtual(data: ICurrentWeatherData): ITempoAtual {
    console.log(data)
    return {
      cidade: data.name,
      pais: data.sys.country,
      date: new Date(data.dt * 1000).toLocaleDateString('en-US'),
      descricao: data.weather[0].description,
      temperatura: this.convertKelvinToCelcius(data.main.temp),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    }
  }

  private convertKelvinToCelcius(kelvin: number): number {
    return kelvin - 272.15
  }
}


