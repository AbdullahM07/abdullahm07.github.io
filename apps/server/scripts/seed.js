import 'dotenv/config';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import mongoose from 'mongoose';
import { Profile, Skill, Project } from '../src/models.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.resolve(here, '../../../content/seed.json');

async function main() {
  const seed = JSON.parse(await readFile(seedPath, 'utf8'));

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB || 'portfolio',
  });

  await Profile.findOneAndUpdate({ key: 'main' }, { ...seed.profile, key: 'main' }, { upsert: true });
  await Skill.deleteMany({});
  await Skill.insertMany(seed.skills);
  await Project.deleteMany({});
  await Project.insertMany(seed.projects.map((p, i) => ({ ...p, order: i })));

  console.log('[seed] profile, skills and projects loaded from content/seed.json');
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('[seed] failed:', err.message);
  process.exit(1);
});
