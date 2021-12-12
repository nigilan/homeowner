/**
 * @file
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */

import devConfig from './dev';

process.env.NODE_ENV = process.env.NODE_ENV.trim();
devConfig();

export default function loadConfiguration() { }
