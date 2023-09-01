import { urls } from 'api/urls'
import { axiosInstance } from 'libs/axios'
import { CepResponse } from './cep.types'

export async function getCep(cep: string): CepResponse {
  return await axiosInstance.get(`${urls.cep}/${cep}`)
}
