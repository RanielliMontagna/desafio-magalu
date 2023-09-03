import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from '@sentry/profiling-node'

import { ZodError } from 'zod'

import { env } from '@/env'
import { publicRoutes } from '@/http/controllers/public/routes'
import { cepRoutes } from '@/http/controllers/cep/routes'

import { swaggerGenerator } from './lib/swagger'

export const app = fastify({})

swaggerGenerator(app)

Sentry.init({
  dsn: env.SENTRY_DSN,
  integrations: [new ProfilingIntegration()],

  tracesSampleRate: 0.1,
  profilesSampleRate: 0.1,
})

app.register(cors, {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://desafio-tecnico-luizalabs-web.onrender.com',
  ],
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '7d',
  },
})

app.register(publicRoutes)
app.register(cepRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    Sentry.captureException(error)
  }

  return reply.status(500).send({
    title: 'Internal server error',
    message: 'Something went wrong. Please try again later.',
  })
})
