import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { phoneRouter } from './routes/phone.routes';
import { generalRouter } from './routes/general.routes';
import { tabletRouter } from './routes/tablet.router';
import { accessoryRouter } from './routes/accessory.routes';
import { connect } from './utils/initDb';

//PORT = 8000

dotenv.config();
connect();

/* const app = express()
.use(express.json())
.use(cors({ origin: process.env.CLIENT_ORIGIN })); */ // THIS tTO ENABLE CORS FOR FRONTEND ONLY

const app = express()
.use(express.json())
.use(cors());

app.options('*', cors())

app.use('/accessories', accessoryRouter);

app.use('/tablets', tabletRouter);

app.use('/phones', phoneRouter);

app.use('/', generalRouter);

app.listen(process.env.PORT, () => {
  console.log(`🚀🚀🚀 Server is running on ${process.env.SERVER_URL} 🚀🚀🚀`)
});