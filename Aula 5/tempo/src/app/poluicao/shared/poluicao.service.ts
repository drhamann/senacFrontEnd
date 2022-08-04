import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AirQuality, IPoluitionData } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';
import { IPoluicao, List, Coordenadas } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PoluicaoService {

  poluicao: BehaviorSubject<IPoluicao> = new BehaviorSubject<IPoluicao>({
    qualidadeDoAr: AirQuality.Good,
    co: 0,
    no2: 0,
    o3: 0,
    so2: 0,
    pm25: 0,
    pm10: 0,
    nh3: 0,
    no: 0
  })

  constructor(private httpClient: HttpClient) {
  }

  getPolutionByCoords(coords: Coordenadas): Observable<IPoluicao> {
    const uriParams = `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }


  private transformToITempoAtual(data: IPoluitionData): IPoluicao {
    console.log(data)
    return {
      qualidadeDoAr: data.list[0].main.aqi,
      co: data.list[0].components.co,
      no: data.list[0].components.no,
      no2: data.list[0].components.no2,
      o3: data.list[0].components.o3,
      so2: data.list[0].components.so2,
      pm25: data.list[0].components.pm2_5,
      pm10: data.list[0].components.pm10,
      nh3: data.list[0].components.pm10,
    }
  }

  private getCurrentWeatherHelper(uriParams: string): Observable<IPoluicao> {
    return this.httpClient.get<IPoluitionData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/air_pollution?${uriParams}&appid=${environment.appId}`)
      .pipe(map(data => {
        const poluicao = this.transformToITempoAtual(data)
        console.log(poluicao)
        return poluicao
      }))
  }
}

