const request = require('supertest');
const app = require('../app');



describe('GET /user/{userId}/settings', () => {
  it('should return user settings for a valid user ID', async () => {

    const { expect } = await import('chai');

    const userId = '1'; 
    const response = await request(app).get(`/user/${userId}/settings`);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('preferredTheme');
    expect(response.body).to.have.property('resultsPerPage');
    expect(response.body).to.have.property('sendEmail');
  });

  it('should return 404 for an invalid user ID', async () => {
    const { expect } = await import('chai');

    const userId = 'invalidUserId';
    const response = await request(app).get(`/user/${userId}/settings`);
    expect(response.status).to.equal(404);
  });
});

describe('POST /user/{userId}/settings', () => {
  it('should create/update user settings', async () => {
    const { expect } = await import('chai');
    const userId = '1';
    const newSettings = {
      preferredTheme: 'dark',
      resultsPerPage: 50,
      sendEmail: false
    };
    const response = await request(app)
      .post(`/user/${userId}/settings`)
      .send(newSettings);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message', 'Settings updated successfully');
  });

});
