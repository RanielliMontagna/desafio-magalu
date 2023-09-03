import { PrismaClient } from '@prisma/client'

import { createHashPassword } from '../src/utils/http/create-hash-password'

const prisma = new PrismaClient()

export const ceps = [
  { cep: '95360000', rua: null, cidade: 'Paraí', estado: 'RS' },
  { cep: '99150000', rua: null, cidade: 'Marau', estado: 'RS' },
]

export const users = [
  { email: 'alice@prisma.io', name: 'Alice' },
  { email: 'bob@prisma.io', name: 'Bob' },
]

async function main() {
  const hashPassword = await createHashPassword('a1s2d3')

  await prisma.user.createMany({
    data: users.map((user) => ({ ...user, password_hash: hashPassword })),
    skipDuplicates: true,
  })

  prisma.cep.createMany({
    data: ceps,
    skipDuplicates: true,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
