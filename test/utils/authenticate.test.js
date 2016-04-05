/**
 * Created by denis.zatsepin on 05/04/16.
 */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { makeSalt, hashPassword } from '../../src/utils/authenticate';

describe('authenticate', () => {

  it('should create salt', async () => {
    const salt = await makeSalt(10);
    
    expect(salt.length).to.be.at.least(10);
  });

  it('should generate hash', async () => {
    const password = '12345678';
    const salt = await makeSalt(10);
    const hash = await hashPassword(password, salt);
    
    expect(hash.length).to.be.at.least(10);
    expect(hash).to.not.equal(password);
  })

});
