const bcrypt = require('bcryptjs');
const mongoose = require('../database/index');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  patent: {
    type: Number,
    require: true,
  },
  register_number: {
    type: Number,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  administrator: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  this.administrator = 0;
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
