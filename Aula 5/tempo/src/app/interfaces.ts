export interface ITempoAtual {
  cidade: string
  pais: string
  date: string
  image: string
  temperatura: number
  descricao: string
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
