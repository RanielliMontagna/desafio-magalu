import request from 'supertest'
import { app } from '@/app'

describe('Check (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to check if the server is running', async () => {
    const response = await request(app.server).get('/check')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual({
      status: 'ok',
    })
  })
})
