import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  userName: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
