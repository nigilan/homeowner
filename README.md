# Homeowner information #

  

A homeowner CRUD microservice


### How do I get set up and run ? ###
1. Application requires [Node.js](https://nodejs.org/) v10+ to run.

2. You need to have `mongod` (MongoDB server) running in order to run the application
3. Register and get an APIKEY from [Geocodeio](https://dash.geocod.io/apikey) and paste it in `src/config/dev.js` file under `geocodeioApiKey`

4. Run the following command to install all the dependencies
`npm install`

5. To start the server run the following command 
`npm start`

6. To run the unit and API tests using JEST, run 
`npm run test`

7. API Testing and documentation is available at [Swaggerlink](localhost:3040/api-docs/) after running `npm run start`

8. Sampledata that can be uploaded for creating homeowners is present under `sampledata` folder

Created with the help of [dillinger](https://dillinger.io/) 