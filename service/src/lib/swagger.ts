import { FastifyInstance } from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export function swaggerGenerator(app: FastifyInstance) {
  app.register(fastifySwagger, {
    mode: 'dynamic',
    openapi: {
      info: {
        title: 'Desafio Técnico - LuizaLabs',
        description: 'API para consulta de CEPs',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:5173',
          description: 'Local server',
        },
        {
          url: "https://desafio-tecnico-luizalabs-api.onrender.com",
          description: 'Production server',
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [{ bearerAuth: [] }],
      tags: [
        { name: 'Public', description: 'Public routes' },
        { name: 'Cep', description: 'Cep routes' },
      ],
    },
  })

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    initOAuth: {},
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  })
}
