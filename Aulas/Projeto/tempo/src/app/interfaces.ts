export interface ITempoAtual {
  cidade: string
  pais: string
  date: string
  image: string
  temperatura: number
  descricao: string
}

export enum QualitativeOptions {
  Good,
  Fair,
  Moderate,
  Poor,
  VeryPoor
}

export interface IPolution {
  name: string,
  qualitativeOption: QualitativeOptions
  polutionConcetration: number
}

export interface ICurrentPolution {
  polutions: IPolution[],
  coordenada: Coordenadas,
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

export interface PolutionComponent {
  description: string,
  icon: string
}

export interface IPolutionData {
  components: PolutionComponent[]
}
export interface ICurrentPollutionData {
  coord: number[],
  list: IPolutionData[]
}
