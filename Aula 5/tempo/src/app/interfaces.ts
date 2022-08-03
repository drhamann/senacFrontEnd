export interface ITempoAtual {
  cidade: string
  pais: string
  date: string
  image: string
  temperatura: number
  descricao: string
}

export interface IPoluicao {
  qualidadeDoAr: string
  co: string
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
