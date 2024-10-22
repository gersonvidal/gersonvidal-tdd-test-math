import { simpson } from './simpson';

describe('simpson test suite', () => {
  it('Should return p = 16.0 if x0 = 0, x1 = 4, num_seg = 4, ERROR = 0.0001 and f(x) = 2x', () => {
    const result = simpson(x0, x1, numSeg, error, fn);
   
    expect(result).toBe(16.0);
  });

  it(' Should return p = 0.3333 if x0 = 0, x1 = 1, num_seg = 4, ERROR = 0.0001 and f(x) = x^2
', () => {
    const result = simpson(x0, x1, numSeg, error, fn);
   
    expect(result).toBe(0.3333);
  });

  it(' Should return p = 1.38 if x0 = 1, x1 = 4, num_seg = 6, ERROR = 0.001 and f(x) = 1/x', () => {
    const result = simpson(x0, x1, numSeg, error, fn);
   
    expect(result).toBe(1.38);
  });
});
