import { Schema, model } from 'mongoose';

const RoleModel = new Schema({
  value: { type: String, defaultValue: 'user', unique: true },
});

export default model('Role', RoleModel);
