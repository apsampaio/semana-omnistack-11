const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Create Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', 'b02f33fa')
      .send({
        title: "Passarinho asa sem pena",
        description: "Arrumar penas para o passaro",
        value: 20,
      });

    expect(response.body).toHaveProperty('id');
  });
});