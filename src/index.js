/**
 * @file Program starts here
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */
import app from './server';

app.listen(process.env.NODE_PORT);

console.info(`Application running on port ${process.env.NODE_PORT} and in ${process.env.NODE_ENV} environment.`);
