import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import { app } from '..';

describe('HealthCheck endpoint', () => {
  test('should return OK', async () => {
    const response = await request(app).get('/hc');
    expect(response.statusCode).toEqual(StatusCodes.OK);
  });
});
