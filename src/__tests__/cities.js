import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import { app } from '..';

describe('Cities endpoint', () => {
  test('should return cities with districts', async () => {
    const response = await request(app).get('/cities');
    expect(response.statusCode).toEqual(StatusCodes.OK);
  });
});
