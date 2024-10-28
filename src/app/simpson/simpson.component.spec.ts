import { SimpsonRule } from '../common/simpson-rule';
import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  it('Should return p = 16.0 if x0 = 0, x1 = 4, num_seg = 4, ERROR = 0.0001 and f(x) = 2x', () => {
    const x0 = 0;
    const x1 = 4;
    const numSeg = 4;
    const error = 0.0001;
    const fn = SimpsonRule.twoTimesX;

    const result = SimpsonComponent.calculateP(fn, x0, x1, numSeg, error);
    expect(result).toBeCloseTo(16.0, 1);
  });

  it('Should return p = 0.3333 if x0 = 0, x1 = 1, num_seg = 4, ERROR = 0.0001 and f(x) = x^2', () => {
    const x0 = 0;
    const x1 = 1;
    const numSeg = 4;
    const error = 0.0001;
    const fn = SimpsonRule.xSquared;

    const result = SimpsonComponent.calculateP(fn, x0, x1, numSeg, error);
    expect(result).toBeCloseTo(0.3333, 4);
  });

  it('Should return p = 1.386 if x0 = 1, x1 = 4, num_seg = 6, ERROR = 0.001 and f(x) = 1/x', () => {
    const x0 = 1;
    const x1 = 4;
    const numSeg = 6;
    const error = 0.0001;
    const fn = SimpsonRule.oneDividedByX;

    const result = SimpsonComponent.calculateP(fn, x0, x1, numSeg, error);
    expect(result).toBeCloseTo(1.386, 3);
  });

  it('should return p = 0.35006 with t-distribution for x = 1.1 and dof = 9', () => {
    const x0 = 0;
    const x1 = 1.1;
    const numSeg = 6;
    const error = 0.0001;
    const dof = 9;

    const result = SimpsonComponent.calculateP(
      (x: number) => SimpsonRule.tDistribution(x, dof),
      x0,
      x1,
      numSeg,
      error
    );
    expect(result).toBeCloseTo(0.35006, 4);
  });

  it('should return p = 0.36757 with t-distribution for x = 1.1812 and dof = 10', () => {
    const x0 = 0;
    const x1 = 1.1812;
    const numSeg = 6;
    const error = 0.0001;
    const dof = 10;

    const result = SimpsonComponent.calculateP(
      (x: number) => SimpsonRule.tDistribution(x, dof),
      x0,
      x1,
      numSeg,
      error
    );
    expect(result).toBeCloseTo(0.36757, 4);
  });

  it('should return p = 0.49500 with t-distribution for x = 2.750 and dof = 30', () => {
    const x0 = 0;
    const x1 = 2.75;
    const numSeg = 6;
    const error = 0.0001;
    const dof = 30;

    const result = SimpsonComponent.calculateP(
      (x: number) => SimpsonRule.tDistribution(x, dof),
      x0,
      x1,
      numSeg,
      error
    );
    expect(result).toBeCloseTo(0.495, 5);
  });
});
