describe('checkSubstring', function() {
  it('handles cases where both needle and haystack are lower case', function() {
    expect(checkSubstring("hello world", "ell")).to.equal(true);
  });
  it('handles cases where either needle or haystack are capitalized', function() {
    expect(checkSubstring("hEllo world", "ell")).to.equal(true);
  });
});
describe('siftConsecutive', function() {
  it('works', function() {
    expect(siftConsecutive("aaabbbcccdeee")).to.equal("d");
  });
});
describe('basicCompression', function() {
  it('works', function() {
    expect(basicCompression("aabccddddddee")).to.equal("2a1b2c6d2e");
  });
});
