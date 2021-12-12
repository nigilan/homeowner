/**
 * @file
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */

const config = {
  env: 'dev',
  port: 3040, // verify port.
  hostURL: 'localhost:3040', // used only by swagger
  mongoDBConnectionString: 'mongodb://localhost/homeowner',
  geocodeioApiKey: '',
};

process.env.NODE_ENV = process.env.NODE_ENV.trim();
if (process.env.NODE_ENV === 'dev') {
  process.env.NODE_PORT = config.port;

  // HostURL, primarily for Swagger but not limited to it
  process.env.hostURL = config.hostURL;

  // DB related details
  process.env.mongoDBConnectionString = config.mongoDBConnectionString;
  process.env.geocodeioApiKey = config.geocodeioApiKey;
}

export default function devConfig() {
  return config;
}
