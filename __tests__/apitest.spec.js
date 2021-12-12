/**
 * @file This file is holding a simple API test by Jest
 * using supertest
 *
 * @author Nigilan P
 * @date 11 Dec 2021
 *
 */
import {
  describe, expect, afterAll, beforeAll,
} from '@jest/globals';
import mongoose from '../src/services/mongodb';
import devConfig from '../src/config/dev';

const request = require('supertest');
const app = require('../src/server');

beforeAll(() => {
  devConfig();
});

describe('Post Endpoints', () => {
  it('should create a new homeowner', async () => {
    const res = await request(app)
      .post('/homeowner')
      .set('Content-type', 'multipart/form-data')
      .attach('file', `${process.cwd()}/sampledata/correctData.xml`,
        { contentType: 'text/xml' });
    expect(res.statusCode).toEqual(201);
  });

  it('should not create a new homeowner - incorrect xml', async () => {
    const res = await request(app)
      .post('/homeowner')
      .set('Content-type', 'multipart/form-data')
      .attach('file', `${process.cwd()}/sampledata/incorrectData.xml`,
        { contentType: 'text/xml' });
    expect(res.statusCode).toEqual(500);
  });

  it('should not create a new homeowner - not an xml file', async () => {
    const res = await request(app)
      .post('/homeowner')
      .set('Content-type', 'multipart/form-data')
      .attach('file', `${process.cwd()}/sampledata/incorrectData.xml`,
        { contentType: 'application/json' });
    expect(res.statusCode).toEqual(500);
  });

  it('should retrieve all the values - 200', async () => {
    const res = await request(app)
      .get('/homeowner/all');
    expect(res.statusCode).toEqual(200);
  });

  it('should retrieve by id - 200', async () => {
    const res = await request(app)
      .get('/homeowner/id/4');
    expect(res.statusCode).toEqual(200);
  });

  it('should retrieve by id - 404', async () => {
    const res = await request(app)
      .get('/homeowner/id/49898989');
    expect(res.statusCode).toEqual(404);
  });

  it('should retrieve by id - 500', async () => {
    const res = await request(app)
      .get('/homeowner/id/&&&');
    expect(res.statusCode).toEqual(500);
  });

  it('should retrieve by param - 200', async () => {
    const res = await request(app)
      .get('/homeowner/profession/Engineer');
    expect(res.statusCode).toEqual(200);
  });

  it('should retrieve by param - 404', async () => {
    const res = await request(app)
      .get('/homeowner/profession/49898989');
    expect(res.statusCode).toEqual(404);
  });

  it('should update the homeowner object - 204', async () => {
    const res = await request(app)
      .put('/homeowner/4')
      .send({
        name: 'Terry',
        age: 36,
        profession: 'Doctor',
        address: {
          lat: '3.28392',
          lng: '9.000001',
        },
      });
    expect(res.statusCode).toEqual(204);
  });

  it('should update the homeowner object - 500', async () => {
    const res = await request(app)
      .put('/homeowner/4')
      .send({
        profession: 'Doctor',
        address: {
          lat: '3.28392',
          lng: '9.000001',
        },
      });
    expect(res.statusCode).toEqual(500);
  });

  it('should delete the homeowner object - 200', async () => {
    const res = await request(app)
      .delete('/homeowner')
      .send([4]);
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
