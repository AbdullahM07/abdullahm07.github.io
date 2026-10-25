import seed from '../../../content/seed.json';

export const profile = seed.profile;
export const stats = seed.stats;
export const skills = seed.skills;
export const projects = seed.projects;

export const CV_PATH = '/Abdullah-Mohamed-CV.pdf';

// When the Express API is deployed, set VITE_API_URL and the debrief grows a
// message form that persists to MongoDB. Without it the site stays honest and
// routes contact through the channels below.
export const API_URL = import.meta.env.VITE_API_URL || null;
