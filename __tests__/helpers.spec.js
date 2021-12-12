/**
 * @file Unit tests
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */
import {
  describe, expect, test, beforeAll,
} from '@jest/globals';
import { convertXMLToJSON, yearCalculator, geocoding } from '../src/helpers';
import devConfig from '../src/config/dev';

const address = '1109 N Highland St, Arlington, VA 22201';
describe('tests for convertXMLToJSON', () => {
  test('Valid XML', async () => {
    const jsonResult = await convertXMLToJSON(`<root>
    <id>4</id>
    <name>John</name>
    <dob>1981-01-01</dob>
    <address>${address}</address>
    <profession>Engineer</profession>
    </root>`);
    expect(jsonResult.root.name[0]).toEqual('John');
    expect(jsonResult.root.profession[0]).toEqual('Engineer');
  });

  test('Invalid XML', async () => {
    await expect(convertXMLToJSON('<root>')).rejects.toThrowError();
  });
});

describe('tests for yearCalculator', () => {
  test('Valid year', () => {
    const year = yearCalculator('1981-01-01');
    expect(Math.round(year)).toEqual(41);
  });

  test('Invalid year', () => {
    const year = yearCalculator('');
    expect(year).toBe(NaN);
  });
});

describe('tests for geocoding', () => {
  let devConfiguration;
  beforeAll(() => {
    devConfiguration = devConfig();
  });

  test('Valid geocoding address', async () => {
    const geoc = await geocoding(address, devConfiguration.geocodeioApiKey);
    const geoCodingAddress = geoc.results[0].location;
    expect(geoCodingAddress).toEqual({
      lat: 38.886672,
      lng: -77.094735,
    });
  });

  test('Invalid geocoding address', async () => {
    await expect(geocoding('', devConfiguration.geocodeioApiKey)).rejects.toThrowError();
  });

  test('Invalid API key for geocoding address', async () => {
    await expect(geocoding(address, 'agsdhjg')).rejects.toThrowError();
  });
});
