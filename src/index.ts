import express from 'express';
import { PORT } from './config/dotenv';
import { router as indexRouter } from './routers'

const app = express();

app.use(express.json());

app.use('/api/v1', indexRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});