import bcrypt from 'bcryptjs';

const verifyPassword = (candidatePassword, salt, encryptedPassword) => {
  candidatePassword = bcrypt.hashSync(candidatePassword, salt);
  return candidatePassword === encryptedPassword;
};

export default verifyPassword;
