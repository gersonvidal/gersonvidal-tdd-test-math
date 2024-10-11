import { compute } from './compute';

describe('compute test suite', () => {
  it('Should return 0 if input is negative', () => {
    const result = compute(-1);
   
    expect(result).toBe(0);
  });

  it('Should increment the input if it is positive', () => {
    const result = compute(1);
   
    expect(result).toBe(2);
  });

  it('Should return 0 if the input is 0', () => {
    const result = compute(0);
   
    expect(result).toBe(0);
  });
});
