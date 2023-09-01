import { FastifyInstance } from 'fastify'

import { check } from './check'
import { authenticate } from './authenticate'

export async function publicRoutes(app: FastifyInstance) {
  app.get('/', check)
  app.post('/authenticate', authenticate)
}
