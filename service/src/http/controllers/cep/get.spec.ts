import request from 'supertest'

import { app } from '@/app'
import { authenticateUser } from '@/utils/test/authenticate-user'

describe('Get CEP (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get CEP data', async () => {
    const { token } = await authenticateUser(app)

    const response = await request(app.server)
      .get('/cep/95360000')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
      cep: '95360000',
      cidade: 'Paraí',
      estado: 'RS',
      rua: '',
    })
  })

  it('should be not able to get CEP data without token', async () => {
    const response = await request(app.server).get('/cep/95360000').send()

    expect(response.status).toEqual(401)
    expect(response.body).toEqual({
      message: 'Unauthorized',
    })
  })

  it('should be not able to get data from a invalid CEP', async () => {
    const { token } = await authenticateUser(app)

    const response = await request(app.server)
      .get('/cep/12121212')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.status).toEqual(400)
    expect(response.body).toEqual({
      message: 'CEP inválido',
    })
  })
})
