import type { Cep, Prisma } from '@prisma/client'
import type { CepExternal, CepRepository } from '../cep-repository'

export class InMemoryCepRepository implements CepRepository {
  public ceps: Cep[] = []
  public viaCepMock: CepExternal[] = [
    {
      cep: '91420270',
      logradouro: 'Rua São Domingos',
      complemento: '',
      bairro: 'Bom Jesus',
      localidade: 'Porto Alegre',
      uf: 'RS',
      ibge: '4314902',
      gia: '',
      ddd: '51',
      siafi: '8801',
    },
  ]

  async findByCep(cep: string) {
    const data = this.ceps.find((item) => item.cep === cep)

    if (!data) {
      return null
    }

    return data
  }

  async findByCepExternal(cep: string) {
    const data = this.viaCepMock.find((item) => item.cep === cep)

    if (!data) {
      return null
    }

    return data
  }

  async create({ cep, cidade, estado, rua }: Prisma.CepUncheckedCreateInput) {
    const newCep: Cep = {
      cep,
      rua: rua || null,
      cidade: cidade,
      estado: estado,
      created_at: new Date(),
    }

    this.ceps.push(newCep)

    return newCep
  }
}
