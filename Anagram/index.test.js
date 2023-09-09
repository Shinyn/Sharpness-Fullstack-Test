const { areAnagrams } = require('./index');

describe('Testing areAnagrams function', () => {
  it('Should return "<word1> and <word2> are anagrams!" for anagram words', () => {
    const result = areAnagrams('listen', 'silent');
    expect(result).toBe("'listen' and 'silent' are anagrams!");
  });

  it('Should handle case insensitivity and return "<word1> and <word2> are anagrams!" for anagram words', () => {
    const result = areAnagrams('RestFul', 'FLUSTER');
    expect(result).toBe("'RestFul' and 'FLUSTER' are anagrams!");
  });

  it('Should return "<word1> and <word2> are NOT anagrams!" for non-anagram words', () => {
    const result = areAnagrams('header', 'footer');
    expect(result).toBe("'header' and 'footer' are NOT anagrams!");
  });

  it('Should return "<word1> and <word2> are NOT anagrams!" for different word lengths', () => {
    const result = areAnagrams('coffee', 'coffe');
    expect(result).toBe("'coffee' and 'coffe' are NOT anagrams!");
  });
});
