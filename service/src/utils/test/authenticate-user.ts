import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function authenticateUser(app: FastifyInstance) {
  const authResponse = await request(app.server).post('/authenticate').send({
    email: 'bob@prisma.io',
    password: 'a1s2d3',
  })

  const { token } = authResponse.body

  return { token }
}
