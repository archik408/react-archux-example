import { expect } from 'chai';
import generatePassword from '../generatePassword';
import { GENERATION_CHARS } from '../../constants';

describe('Password generator service', () => {
  function checkChars(index, length) {
    expect(GENERATION_CHARS.includes(
      generatePassword(length)[index])).to.be.equal(true);
  }

  it('Check generated password', () => {
    const charsLength = 8;

    const generatedPassword = generatePassword(charsLength);

    expect(generatedPassword.length).to.be.equal(charsLength);

    for (let charIndex = 0; charIndex < charsLength; charIndex++) {
      checkChars(charIndex, charsLength);
    }
  });
});
