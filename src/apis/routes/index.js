/**
 * @file
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */

import homeownerRouter from './homeowner';

export default function loadRoutes(app) {
  app.use('/homeowner', homeownerRouter);
}
