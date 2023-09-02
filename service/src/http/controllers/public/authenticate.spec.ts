import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Authenticate (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate', async () => {
    const response = await request(app.server).post('/authenticate').send({
      email: 'bob@prisma.io',
      password: 'a1s2d3',
    })

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
  })

  it('should be not able to authenticate with invalid credentials', async () => {
    const response = await request(app.server).post('/authenticate').send({
      email: 'test@gmail.com',
      password: 'a1s2d3',
    })

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      title: 'Invalid credentials',
      message: 'Please, check your email and password and try again.',
    })
  })
})
