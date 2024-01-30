import { Schema, model } from 'mongoose';

const UserModel = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, ref: 'Role' },
  name: { type: String, default: null },
  gender: { type: String, default: null },
  phone: { type: String, default: null },
  email: { type: String, default: null },
  floor: { type: Number, default: null },
  apartment: { type: Number, default: null },
  avatar: { type: String, default: null },
});

export default model('User', UserModel);
