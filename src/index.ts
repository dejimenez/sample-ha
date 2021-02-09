import { default as express } from 'express';

import { LOGGER_SERVICE, startWebControllers, get } from './common';
import { LoggerService } from './common';
import './app';

const port = process.env.PORT;
const logger: LoggerService = get(LOGGER_SERVICE);

const app = express();
app.use(express.json());
app.use('*', startWebControllers());

app.listen(port, () => {
  logger.info(`listening on port: ${port}`);
});
