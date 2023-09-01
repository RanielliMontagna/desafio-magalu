import { InMemoryCepRepository } from '@/repositories/in-memory/in-memory-cep-repository'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'

import { GetCepUseCase } from './get-cep'
import { createHashPassword } from '@/utils/http/create-hash-password'
import { randomUUID } from 'crypto'
import { CepNotFoundError } from '../errors/cep-not-found-error'

let cepRepository: InMemoryCepRepository
let userRepository: InMemoryUserRepository
let sut: GetCepUseCase

describe('Get Cep Use Case', () => {
  const idUser = randomUUID()

  beforeEach(async () => {
    cepRepository = new InMemoryCepRepository()
    userRepository = new InMemoryUserRepository()
    sut = new GetCepUseCase(cepRepository, userRepository)

    await userRepository.create({
      id: idUser,
      name: 'User Name',
      email: 'user@name.com',
      password_hash: await createHashPassword('a1s2d3'),
    })
  })

  it('should be able to get a cep', async () => {
    const dadosParai = {
      cep: '95360000',
      cidade: 'Paraí',
      estado: 'RS',
    }

    await cepRepository.create(dadosParai)

    const cep = await sut.execute({
      cep: '95360000',
      userId: idUser,
    })

    expect(cep).toEqual(
      expect.objectContaining({
        cep: '95360000',
        cidade: 'Paraí',
        estado: 'RS',
        rua: null,
      }),
    )
  })

  it('should not be able to get a cep with invalid cep', async () => {
    await expect(
      sut.execute({
        cep: '95360000',
        userId: idUser,
      }),
    ).rejects.toBeInstanceOf(CepNotFoundError)
  })

  it('should not be able to get a cep with invalid user', async () => {
    await expect(
      sut.execute({
        cep: '95360000',
        userId: randomUUID(),
      }),
    ).rejects.toBeInstanceOf(CepNotFoundError)
  })
})
