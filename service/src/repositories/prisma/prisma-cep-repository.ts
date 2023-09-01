import { prisma } from '@/lib/prisma'

import { CepRepository } from '../cep-repository'
import { Prisma } from '@prisma/client'

export class PrismaCepRepository implements CepRepository {
  async findByCep(cep: string) {
    const data = await prisma.cep.findUnique({
      where: { cep },
    })

    return data
  }

  async create(cep: Prisma.CepUncheckedCreateInput) {
    const data = await prisma.cep.create({
      data: cep,
    })

    return data
  }
}
