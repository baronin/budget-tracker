import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routers/*.js'];

swaggerAutogen(outputFile, endpointsFiles);
