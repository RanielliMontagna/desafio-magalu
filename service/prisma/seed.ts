import { PrismaClient } from '@prisma/client'

import { createHashPassword } from '../src/utils/http/create-hash-password'

const prisma = new PrismaClient()

const ceps = [
  {
    cep: '95360000',
    rua: null,
    cidade: 'Paraí',
    estado: 'RS',
  },
  {
    cep: '99150000',
    rua: null,
    cidade: 'Marau',
    estado: 'RS',
  },
]

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password_hash: await createHashPassword('a1s2d3'),
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      password_hash: await createHashPassword('a1s2d3'),
    },
  })

  const dataCeps = await prisma.cep.createMany({
    data: ceps,
    skipDuplicates: true,
  })

  console.log({ alice, bob })
  console.log(`Created ${dataCeps.count} new ceps`)
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
