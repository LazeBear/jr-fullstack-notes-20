const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Tasks API',
      version: '0.0.1',
      description: 'A SIMPLE DESCRIPTION',
      contact: {
        name: 'john',
        email: 'john@example.com',
      },
    },
  },
  apis: ['src/controllers/*.js'],
});
