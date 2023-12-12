import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { phoneRouter } from './routes/phone.routes';
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

app.use('/phones', phoneRouter);

app.listen(process.env.PORT, () => {
  console.log(`🚀🚀🚀 Server is running on http://localhost:${process.env.PORT} 🚀🚀🚀`)
});