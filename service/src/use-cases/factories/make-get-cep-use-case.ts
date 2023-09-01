import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { PrismaCepRepository } from '@/repositories/prisma/prisma-cep-repository'

import { GetCepUseCase } from '../cep/get-cep'

export function makeGetCepUseCase() {
  const cepRepository = new PrismaCepRepository()
  const usersRepository = new PrismaUserRepository()

  const useCase = new GetCepUseCase(cepRepository, usersRepository)

  return useCase
}
