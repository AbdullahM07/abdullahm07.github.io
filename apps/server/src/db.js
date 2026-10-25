import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  console.error(
    '[db] MONGODB_URI is not set. Copy .env.example to .env and point it at ' +
      'a local Mongo (docker compose up mongo) or a MongoDB Atlas cluster.'
  );
  process.exit(1);
}

export async function connectDb() {
  mongoose.set('strictQuery', true);
  await mongoose.connect(MONGODB_URI, { dbName: process.env.MONGODB_DB || 'portfolio' });
  console.log('[db] connected');
}
