import type { Cep, Prisma } from '@prisma/client'
import type { CepRepository } from '../cep-repository'

export class InMemoryCepRepository implements CepRepository {
  public ceps: Cep[] = []

  async findByCep(cep: string) {
    const data = this.ceps.find((item) => item.cep === cep)

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
