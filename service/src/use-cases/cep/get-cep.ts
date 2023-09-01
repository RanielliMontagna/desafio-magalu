import { Cep } from '@prisma/client'

import { UserRepository } from '@/repositories/user-repository'

import { UserNotFoundError } from '@/use-cases/errors/user-not-found-error'
import { CepRepository } from '@/repositories/cep-repository'
import { CepNotFoundError } from '../errors/cep-not-found-error'

export interface GetCepUseCaseRequest {
  cep: string
  userId: string
}

export interface GetCepUseCaseResponse extends Omit<Cep, 'created_at'> {}

export class GetCepUseCase {
  constructor(
    private cepRepository: CepRepository,
    private userRepository: UserRepository,
  ) {}

  async execute({
    cep,
    userId,
  }: GetCepUseCaseRequest): Promise<GetCepUseCaseResponse> {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    const data = await this.cepRepository.findByCep(cep)

    if (!data) {
      throw new CepNotFoundError()
    }

    return {
      cep: data.cep,
      cidade: data.cidade,
      estado: data.estado,
      rua: data.rua,
    }
  }
}
