import type { Cep, Prisma } from '@prisma/client'

export interface CepExternal {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export interface CepRepository {
  create(cep: Prisma.CepUncheckedCreateInput): Promise<Cep>
  findByCep(cep: string): Promise<Cep | null>
  findByCepExternal(cep: string): Promise<CepExternal | null>
}
