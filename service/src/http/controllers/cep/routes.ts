import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

import { getCep } from './get'

export async function cepRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/cep/:cep', getCep)
}
