/**
 * @file Load all the necessary modules
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { bodyParserJSON, bodyParserURLEncoded, helmetUsage } from './apis/middleware';
import loadConfiguration from './config';
import loadRoutes from './apis/routes';
import { name, version, description } from '../package.json';
// eslint-disable-next-line no-unused-vars
import mongoose from './services/mongodb';

const app = express();

// middleware settings for the express server
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(helmetUsage);

// load the necessary process.env files
loadConfiguration();

// load all the possible routes
loadRoutes(app);

// swagger implementation
const swaggerDefinition = {
  info: {
    title: name,
    version,
    description,
  },
  host: process.env.hostURL,
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/**/*.js`],
};
const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
  res.status(404).send('Sorry this API call is not found in the system');
  next();
});

process.on('unhandledRejection', (error) => {
  console.error(`unhandledRejection ${error.message}`);
});

process.on('uncaughtException', (err, origin) => {
  console.error(`uncaughtException ${err} - ${origin}`);
});

module.exports = app;
