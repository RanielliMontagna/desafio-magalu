import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import { ZodError } from 'zod'

import { env } from '@/env'

import { publicRoutes } from '@/http/controllers/public/routes'
import { cepRoutes } from '@/http/controllers/cep/routes'

export const app = fastify({})

app.register(cors, { origin: ['http://localhost:5173'] })

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
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({
    title: 'Internal server error',
    message: 'Something went wrong. Please try again later.',
  })
})
