import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject, map, Observable, debounceTime } from 'rxjs';
import { ICurrentPollutionData, ICurrentPolution, IPolutionData } from 'src/app/interfaces';
import { Coordenadas, IPolution } from '../../interfaces';
import { environment } from 'src/environments/environment';
import { LocalStorageService, StorageKeys } from 'src/app/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CaptainPlanetService {

  currentPpolution: BehaviorSubject<ICurrentPolution> = new BehaviorSubject<ICurrentPolution>({
    polutions: [],
    coordenada: {
      latitude: 0,
      longitude: 0,}
  })

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
        
    this.getCurrentPolution().subscribe(data => this.currentPpolution.next(data))
  }

  getCurrentPolution(): Observable<ICurrentPolution> { 
    const uriParams = `lat=${this.currentPpolution.value.coordenada.latitude}&lon=${this.currentPpolution.value.coordenada.longitude}`
    return this.getCurrentPolutionHelper(uriParams)
  }


  private getCurrentPolutionHelper(uriParams: string): Observable<ICurrentPolution> {
    return this.httpClient.get<ICurrentPollutionData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/air_polution?${uriParams}&appid=${environment.appId}`)
      .pipe(map(data => {
        const poluition = this.transformToITCurrentPollution(data)
        this.localStorageService.set(StorageKeys.POLUICA_ATUAL, JSON.stringify(poluition))
        return poluition
      }))
  }

  private transformToITCurrentPollution(data: ICurrentPollutionData): ICurrentPolution {
    return {     
      polutions: this.transformToITCurrentPollutionPolution(data.list),
      coordenada: { latitude: data.coord[0], longitude: data.coord[1] }
    }
  }
  transformToITCurrentPollutionPolution(poluition: IPolutionData[]): IPolution[] {
    const polutions: IPolution[] = []
    poluition.forEach(p => {
    
      polutions.push(new IPolution(p.name, p.value))
        name: p.description
        
      }
    
  }

}