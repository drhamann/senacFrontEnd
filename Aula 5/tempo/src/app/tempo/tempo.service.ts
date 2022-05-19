import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurrentWeatherData, ITempoAtual } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<ITempoAtual> {
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
      `q=${city},${country}&appid=${environment.appId}`
    ).pipe(map(data => this.transformToITempoAtual(data)))
  }

  private transformToITempoAtual(data: ICurrentWeatherData): ITempoAtual {
    console.log(data)
    return {
      cidade: data.name,
      pais: data.sys.country,
      date: new Date(data.dt * 1000).toLocaleDateString('pt-BR'),
      descricao: data.weather[0].description,
      temperatura: this.convertKelvinToCelcius(data.main.temp),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    }
  }

  private convertKelvinToCelcius(kelvin: number): number {
    return kelvin - 272.15
  }
}


