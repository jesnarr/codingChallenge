const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Coding Challenge',
      version: '1.0.0',
      description: 'Documentation for Express API endpoints',
      contact: {
        name: 'Jesnar Erpe',
        email: 'jesnarerpe3@gmail.com',
        url: 'https://github.com/jesnarr',
      },
    },
    servers: [{ url: 'http://localhost:3000', description: 'Development server' }],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };