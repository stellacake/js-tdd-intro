const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
  
    it('transforms aloha correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('aloha'), 'Aloha');
    });

    it('transforms i am learning TDD correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });
  
    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });
  
    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
  });