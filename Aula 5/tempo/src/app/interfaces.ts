export interface ITempoAtual {
  cidade: string
  pais: string
  date: string
  image: string
  temperatura: number
  descricao: string
}

export interface IPoluicao {
  qualidadeDoAr: AirQuality
  co: number
  no: number
  no2: number
  o3: number
  so2: number
  pm25: number
  pm10: number
  nh3: number
}

export interface Coordenadas {
  latitude: number
  longitude: number
}

export interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  aqi: number;
}

export interface Components {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

export interface List {
  main: Main;
  components: Components;
  dt: number;
}

export interface RootObject {
  coord: Coord;
  list: List[];
}
export interface IPoluitionData {
  coord: Coord;
  list: List[];
}
export enum AirQuality {
  Good = 1,
  Fair = 2,
  Moderate = 3,
  Poor = 4,
  Very_Poor = 5
}
