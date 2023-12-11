import express from 'express';
import dotenv from 'dotenv';
//PORT = 8000

dotenv.config();

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(process.env.PORT, () => {
  console.log(`🚀🚀🚀 Server is running on http://localhost:${process.env.PORT} 🚀🚀🚀`)
});