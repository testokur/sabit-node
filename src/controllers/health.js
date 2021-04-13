import { StatusCodes } from 'http-status-codes';

export default (_, res) => {
  res.status(StatusCodes.OK).send('Healthy!');
};
