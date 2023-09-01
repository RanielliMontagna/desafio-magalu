import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeGetCepUseCase } from '@/use-cases/factories/make-get-cep-use-case'
import { CepNotFoundError } from '@/use-cases/errors/cep-not-found-error'

export async function getCep(request: FastifyRequest, reply: FastifyReply) {
  const getCepQuerySchema = z.object({
    cep: z
      .string()
      .length(8, 'CEP must have 8 digits')
      .regex(/^\d+$/, 'CEP must contain only digits'),
  })

  const { cep } = getCepQuerySchema.parse(request.params)

  const getCepUseCase = makeGetCepUseCase()

  try {
    const data = await getCepUseCase.execute({
      cep,
      userId: request.user.sub,
    })

    return reply.status(200).send(data)
  } catch (err) {
    if (err instanceof CepNotFoundError) {
      reply.status(400).send({ message: err.message })
      return
    }

    throw err
  }
}
