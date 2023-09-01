import { AxiosResponse } from 'axios'

export interface Cep {
  cep: string
  cidade: string
  estado: string
  rua: string
}

export type CepResponse = Promise<AxiosResponse<Cep>>
