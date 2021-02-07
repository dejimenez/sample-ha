import dotenv from 'dotenv';
import { default as express } from 'express';
import { startWebControllers } from './common';
import './app';

dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use('*', startWebControllers());
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
