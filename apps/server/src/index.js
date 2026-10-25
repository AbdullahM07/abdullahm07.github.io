import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDb } from './db.js';
import { router } from './routes.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true }));
app.use(express.json({ limit: '16kb' }));

app.use('/api', router);

app.use((err, _req, res, _next) => {
  console.error('[api] unhandled:', err.message);
  res.status(500).json({ error: 'Internal error' });
});

const port = Number(process.env.PORT || 4011);

connectDb()
  .then(() => {
    app.listen(port, () => console.log(`[api] listening on :${port}`));
  })
  .catch((err) => {
    console.error('[api] failed to start:', err.message);
    process.exit(1);
  });
