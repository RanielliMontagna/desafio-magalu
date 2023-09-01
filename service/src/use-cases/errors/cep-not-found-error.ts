export class CepNotFoundError extends Error {
  constructor() {
    super('CEP inválido')
  }
}
