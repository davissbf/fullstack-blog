import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extend: true }));
app.use(express.urlencoded({ limit: '30mb', extend: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use('/posts', routes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running ⚡ | port: ${PORT}`);
  });
})
.catch(err => {
  console.log(err);
});
