import { shuffle } from '../starter/src/shuffle.js';
import { expect } from 'chai';

describe('shuffle', () => {
  it('should return a new array with the same elements in different order', () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle(original);

    // Check it returns a new array
    expect(result).to.not.equal(original);

    // Check both arrays have the same elements
    expect(result.sort()).to.deep.equal(original.sort());
  });

  it('should not modify the original array', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    shuffle(original);
    expect(original).to.deep.equal(copy);
  });

  it('should return an empty array if input is empty', () => {
    const result = shuffle([]);
    expect(result).to.deep.equal([]);
  });

  it('should work with array of strings', () => {
    const original = ['a', 'b', 'c'];
    const result = shuffle(original);
    expect(result.sort()).to.deep.equal(original.sort());
  });
});
