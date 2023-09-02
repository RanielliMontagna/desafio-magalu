import axios from 'axios'

const viaCepInstance = axios.create({
  baseURL: 'https://viacep.com.br/ws',
})

export { viaCepInstance }
