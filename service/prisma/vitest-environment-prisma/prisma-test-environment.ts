import 'dotenv/config'

import { randomUUID } from 'node:crypto'
import { execSync } from 'node:child_process'

import { PrismaClient } from '@prisma/client'
import { ceps, users } from 'prisma/seed'

import { Environment } from 'vitest'
import { createHashPassword } from '@/utils/http/create-hash-password'

const prisma = new PrismaClient()

function generateDatabaseURL(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable.')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  async setup() {
    const schema = randomUUID()
    const databaseURL = generateDatabaseURL(schema)

    process.env.DATABASE_URL = databaseURL

    execSync('npx prisma migrate deploy')

    const hashPassword = await createHashPassword('a1s2d3')

    await prisma.user.createMany({
      data: users.map((user) => ({ ...user, password_hash: hashPassword })),
      skipDuplicates: true,
    })

    await prisma.cep.createMany({
      data: ceps,
      skipDuplicates: true,
    })

    return {
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )

        await prisma.$disconnect()
      },
    }
  },
}
