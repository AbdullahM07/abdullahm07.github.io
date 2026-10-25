import mongoose from 'mongoose';

const { Schema } = mongoose;

const socialSchema = new Schema(
  {
    id: { type: String, required: true },
    label: { type: String, required: true },
    handle: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const profileSchema = new Schema(
  {
    key: { type: String, default: 'main', unique: true, index: true },
    name: { type: String, required: true },
    codename: String,
    role: String,
    tagline: String,
    bio: String,
    statement: String,
    location: String,
    employer: String,
    education: String,
    fileNo: String,
    status: String,
    avatar: String,
    socials: [socialSchema],
    stats: [{ label: String, value: String }],
  },
  { timestamps: true }
);

const skillSchema = new Schema(
  { group: { type: String, required: true }, items: [{ type: String }] },
  { _id: false }
);

const projectSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    index: String,
    name: { type: String, required: true },
    tagline: String,
    description: String,
    stack: [String],
    live: { type: String, default: null },
    repo: { type: String, default: null },
    role: String,
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const messageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, maxlength: 200 },
    body: { type: String, required: true, trim: true, maxlength: 4000 },
    handled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Profile = mongoose.model('Profile', profileSchema);
export const Skill = mongoose.model('Skill', skillSchema);
export const Project = mongoose.model('Project', projectSchema);
export const Message = mongoose.model('Message', messageSchema);
