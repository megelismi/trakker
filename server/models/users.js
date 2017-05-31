import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
