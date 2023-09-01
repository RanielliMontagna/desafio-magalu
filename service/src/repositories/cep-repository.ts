import type { Cep, Prisma } from '@prisma/client'

export interface CepRepository {
  create(cep: Prisma.CepUncheckedCreateInput): Promise<Cep>
  findByCep(cep: string): Promise<Cep | null>
}
