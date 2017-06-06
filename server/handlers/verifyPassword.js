import bcrypt from 'bcryptjs';

/**
 * Ensures there are not blank form fields
 *
 * @param {String} candidatePassword
 * @param {String} salt
 * @param {String} encryptedPassword
 * @returns bool
 */

const verifyPassword = (candidatePassword, salt, encryptedPassword) => {
  candidatePassword = bcrypt.hashSync(candidatePassword, salt);
  return candidatePassword === encryptedPassword;
};

export default verifyPassword;
