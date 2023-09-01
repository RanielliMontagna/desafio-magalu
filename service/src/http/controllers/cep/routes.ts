import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

import { getCep } from './get'

export async function cepRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get(
    '/cep/:cep',
    {
      schema: {
        tags: ['Cep'],
        summary: 'Busca um CEP',
        params: {
          type: 'object',
          properties: {
            cep: { type: 'string' },
          },
          required: ['cep'],
        },
        response: {
          200: {
            type: 'object',
            properties: {
              cep: { type: 'string' },
              cidade: { type: 'string' },
              estado: { type: 'string' },
              rua: { type: 'string' },
            },
          },
        },
      },
    },
    getCep,
  )
}
