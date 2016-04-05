/**
 * Created by denis.zatsepin on 05/04/16.
 */

import promisify from 'es6-promisify';
import bcrypt from 'bcrypt';

const genSalt = promisify(bcrypt.genSalt);
const genHash = promisify(bcrypt.hash);

export function makeSalt() {
  return genSalt(10);
}

export function hashPassword(password, salt) {
  return genHash(password, salt);
} 
