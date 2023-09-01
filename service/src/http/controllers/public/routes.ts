import { FastifyInstance } from 'fastify'

import { check } from './check'
import { authenticate } from './authenticate'

export async function publicRoutes(app: FastifyInstance) {
  app.get(
    '/check',
    {
      schema: {
        tags: ['Public'],
        summary: 'Verifica se a API está online',
        response: {
          200: {
            type: 'object',
            properties: {
              status: { type: 'string', enum: ['ok'] },
            },
          },
        },
      },
    },
    check,
  )

  app.post(
    '/authenticate',
    {
      schema: {
        tags: ['Public'],
        summary: 'Autentica um usuário',
        body: {
          type: 'object',
          properties: {
            email: { type: 'string' },
            password: { type: 'string' },
          },
          required: ['email', 'password'],
        },
        response: {
          200: {
            type: 'object',
            properties: {
              token: { type: 'string' },
            },
          },
        },
      },
    },
    authenticate,
  )
}
