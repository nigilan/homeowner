/**
 * @file This file is having the mongoDB connection details
 *
 * @author Nigilan P
 * @date 11 Dec 2021
 *
 */

import mongoose from 'mongoose';

const connectString = process.env.mongoDBConnectionString || 'mongodb://localhost/homeowner';

mongoose
  .connect(connectString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.info(
      `MongoDB server is started in ${process.env.NODE_ENV} mode`,
    );
  })
  .catch((err) => {
    console.error(
      `MongoDB server cannot be started in ${process.env.NODE_ENV} mode because ${err}`,
    );
  });

export default mongoose;
