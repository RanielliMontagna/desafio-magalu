export class CepNotFoundError extends Error {
  constructor() {
    super('Cep not found')
  }
}
