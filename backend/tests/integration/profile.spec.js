const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG Profile', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to see the ONG profile', async () => {
    const response = await request(app)
      .post('/profile')
      .set('Authorization', 'b02f33fa')
      .send('');


    expect(response.body).toEqual(expect.any(Object))
  });
});