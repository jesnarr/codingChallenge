const request = require('supertest');
const app = require('../app');


describe('GET /ping', () => {
  it('should return timestamp', async () => {
    const { expect } = await import('chai');
   
    const response = await request(app).get('/ping');
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('timestamp');
  });
});