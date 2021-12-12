/**
 * @file This file contains middleware modules for express application
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */

import helmet from 'helmet';
import bodyParser from 'body-parser';

export const bodyParserJSON = bodyParser.json();
export const bodyParserURLEncoded = bodyParser.urlencoded({ extended: false });
export const helmetUsage = helmet();
