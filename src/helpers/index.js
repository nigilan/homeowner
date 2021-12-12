/**
 * @file
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */
import xml2js from 'xml2js';
import moment from 'moment';

const Geocodio = require('geocodio-library-node');

export const geocoding = (address, apikey) => {
  const geocoder = new Geocodio(apikey);
  return new Promise((resolve, reject) => {
    geocoder.geocode(address)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export function convertXMLToJSON(xmlcontent) {
  const parser = new xml2js.Parser();
  return new Promise((resolve, reject) => {
    parser.parseStringPromise(xmlcontent).then((result) => {
      resolve(result);
    })
      .catch((err) => {
        reject(err);
      });
  });
}

export const yearCalculator = (yearString) => moment().diff(yearString, 'years', true);
