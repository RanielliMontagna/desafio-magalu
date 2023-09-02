import { prisma } from '@/lib/prisma'

import { CepRepository } from '../cep-repository'
import { Prisma } from '@prisma/client'
import { viaCepInstance } from '@/lib/axios'

export class PrismaCepRepository implements CepRepository {
  async findByCep(cep: string) {
    const data = await prisma.cep.findUnique({
      where: { cep },
    })

    return data
  }

  async findByCepExternal(cep: string) {
    const data = await viaCepInstance.get(`${cep}/json`)

    if (data.status === 200) {
      return data.data
    }
  }

  async create(cep: Prisma.CepUncheckedCreateInput) {
    const data = await prisma.cep.create({
      data: cep,
    })

    return data
  }
}
