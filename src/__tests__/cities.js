import request from 'supertest';
import { app } from '..';

describe('Cities endpoint', () => {
  test('should return cities with districts', async () => {
    const response = await request(app).get('/cities');
    const cities = response.body;
    expect(cities.length).toBeGreaterThan(80);
  });
});
// CitiesAndDistrictsShouldNotBeEmpty(cities);
// CitiesShouldBeOrdered(cities);
// DistrictsShouldBeOrdered(cities);
