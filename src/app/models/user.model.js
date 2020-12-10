const bcrypt = require('bcryptjs')

const mongoose = require('../../database/index.database')

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
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  passwordResetToken:{
    type: String,
    select: false,
  },
  passwordResetExpires:{
    type: Date,
    select: false,
  },
  authorized:{
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
