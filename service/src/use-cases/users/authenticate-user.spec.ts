import { hash } from 'bcryptjs'
import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { AuthenticateUserUseCase } from './authenticate-user'

import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { createHashPassword } from '@/utils/http/create-hash-password'

let usersRepository: InMemoryUserRepository
let sut: AuthenticateUserUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository()
    sut = new AuthenticateUserUseCase(usersRepository)
  })

  it('should be able to authenticate a user', async () => {
    await usersRepository.create({
      name: 'User Name',
      email: 'user@name.com',
      password_hash: await createHashPassword('a1s2d3'),
    })

    const { user } = await sut.execute({
      email: 'user@name.com',
      password: 'a1s2d3',
    })

    expect(user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: 'User Name',
        email: 'user@name.com',
        password_hash: expect.any(String),
        created_at: expect.any(Date),
      }),
    )
  })

  it('should not be able to authenticate a user with invalid email', async () => {
    await expect(
      sut.execute({
        email: 'teste@gmail.com',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate a user with invalid password', async () => {
    await usersRepository.create({
      name: 'User Name',
      email: 'user@name.com',
      password_hash: await hash('teste123', 8),
    })

    await expect(
      sut.execute({
        email: 'user@name.com',
        password: 'teste321',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
