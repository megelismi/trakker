import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  _id: String,
  password: String,
  salt: String,
  accessToken: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
