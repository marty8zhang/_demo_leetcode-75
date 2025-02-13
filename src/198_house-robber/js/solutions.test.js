// import { rob } from './solution-1.js';
import { rob } from './solution-2.js';

describe('`rob()`', () => {
  it('should return the only amount, when there is only one house', () => {
    expect(rob([13])).toBe(13);
  });

  it('should return the greater amount, when there are only two houses', () => {
    expect(rob([9, 13])).toBe(13);
  });

  it('should return the only amount, when there are only two houses and they have the same amount', () => {
    expect(rob([13, 13])).toBe(13);
  });

  it('should return the greater sum, when there are multiple houses', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  it('should know how to skip houses and return the greater sum, when there are multiple houses', () => {
    expect(rob([2, 7, 1, 1, 9, 3, 1])).toBe(17);
  });

  it('should return the expected result, when there are a large number of houses', () => {
    expect(
      rob([
        226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37,
        157, 43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245,
        63, 25, 194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63,
        201, 172, 130, 103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77,
        223, 188, 99, 228, 90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123,
        120, 131, 203, 219, 10, 82, 35, 120, 180, 249, 106, 37, 169, 225, 54,
        103, 55, 166, 124,
      ]),
    ).toBe(7102);
  });
});
