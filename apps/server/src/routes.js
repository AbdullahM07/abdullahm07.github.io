import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { Profile, Skill, Project, Message } from './models.js';

export const router = Router();

const sendLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many messages from this address. Try again later.' },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.get('/health', (_req, res) => {
  res.json({ ok: true });
});

router.get('/profile', async (_req, res, next) => {
  try {
    const profile = await Profile.findOne({ key: 'main' }).lean();
    if (!profile) return res.status(503).json({ error: 'Profile not seeded. Run npm run seed.' });
    res.json(profile);
  } catch (err) {
    next(err);
  }
});

router.get('/skills', async (_req, res, next) => {
  try {
    res.json(await Skill.find().lean());
  } catch (err) {
    next(err);
  }
});

router.get('/projects', async (_req, res, next) => {
  try {
    res.json(await Project.find().sort({ order: 1 }).lean());
  } catch (err) {
    next(err);
  }
});

router.post('/messages', sendLimit, async (req, res, next) => {
  try {
    const { name, email, body } = req.body ?? {};
    const errors = [];
    if (typeof name !== 'string' || !name.trim()) errors.push('name is required');
    if (typeof email !== 'string' || !EMAIL_RE.test(email)) errors.push('email is invalid');
    if (typeof body !== 'string' || body.trim().length < 10) errors.push('body must be at least 10 characters');
    if (errors.length) return res.status(422).json({ error: errors.join('; ') });

    const message = await Message.create({ name: name.trim(), email: email.trim(), body: body.trim() });
    res.status(201).json({ ok: true, id: message.id });
  } catch (err) {
    next(err);
  }
});
