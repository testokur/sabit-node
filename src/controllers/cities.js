import { StatusCodes } from 'http-status-codes';
import { readFile } from 'fs/promises';

export default async (_, res) => {
  const cities = JSON.parse(await readFile('data/cities.json', 'utf8'));
  res.status(StatusCodes.OK).send(cities);
};
