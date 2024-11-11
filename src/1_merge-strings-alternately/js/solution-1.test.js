import { mergeAlternately } from './solution-1.js';

describe('mergeAlternately()', () => {
  it('should return an expected merged string when the given strings have the same length', () => {
    expect(mergeAlternately('hello', 'world')).toEqual('hweolrllod');
  });

  it('should return an expected merged string when the first given string is longer than the second given string', () => {
    expect(mergeAlternately('fantastic', 'world')).toEqual('fwaonrtladstic');
  });

  it('should return an expected merged string when the first given string is shorter than the second given string', () => {
    expect(mergeAlternately('hello', 'javascript')).toEqual('hjealvlaoscript');
  });
});
