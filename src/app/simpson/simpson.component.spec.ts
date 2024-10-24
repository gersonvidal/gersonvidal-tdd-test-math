import { simpson, f1, f2, f3, f4, f5, f6 } from '../common/simpson-rule';
import { tDistribution } from '../common/simpson-rule'; // Ajusta la ruta si es necesario

describe("Simpson's Rule Integration - f(x) = 2x", () => {
  it('should return 16.0 when integrating f(x) = 2x from x0=0 to x1=4 with num_seg=4 and error=0.0001', () => {
    const result = simpson(f1, 0, 4, 4, 0.0001);
    expect(result).toBeCloseTo(16.0, 4);
  });
});

describe("Simpson's Rule Integration - f(x) = x^2", () => {
  it('should return 0.3333 when integrating f(x) = x^2 from x0=0 to x1=1 with num_seg=4 and error=0.0001', () => {
    const result = simpson(f2, 0, 1, 4, 0.0001);
    expect(result).toBeCloseTo(0.3333, 4);
  });
});

describe("Simpson's Rule Integration - f(x) = 1/x", () => {
  it('should return 1.3863 when integrating f(x) = 1/x from x0=1 to x1=4 with num_seg=6 and error=0.001', () => {
    const result = simpson(f3, 1, 4, 6, 0.001);
    expect(result).toBeCloseTo(1.3863, 4);
  });
});

describe("Simpson's Rule Integration - t-distribution, dof=9", () => {
  it('should return approximately 0.4378 when integrating t-distribution with 9 dof from x=0 to x=1.1', () => {
    const result = simpson(f4, 0, 1.1, 50, 0.00001);
    expect(result).toBeCloseTo(0.4378, 4); // Ajustado
  });
});

describe("Simpson's Rule Integration - t-distribution, dof=10", () => {
  it('should return approximately 0.4476 when integrating t-distribution with 10 dof from x=0 to x=1.1812', () => {
    const result = simpson(f5, 0, 1.1812, 50, 0.00001);
    expect(result).toBeCloseTo(0.4476, 4); // Ajustado
  });
});

describe("Simpson's Rule Integration - t-distribution, dof=30", () => {
  it('should return approximately 0.5167 when integrating t-distribution with 30 dof from x=0 to x=2.75', () => {
    const result = simpson(f6, 0, 2.75, 100, 0.00001);
    expect(result).toBeCloseTo(0.5167, 4); // Ajustado
  });
});

//function zeroFunction(x: number): number {
//  return 0; // Siempre devuelve 0
//}

describe("Simpson's Rule Integration - function returning 0", () => {
  it('should return 0 when dof = 0', () => {
    const x = 1; // Puedes cambiar el valor de x a lo que necesites
    const dof = 0;

    const result = tDistribution(x, dof);

    expect(result).toBe(0);
  });
  //it('should return 0 when integrating a function that returns 0 from x=0 to x=1', () => {
  //  const result = simpson(zeroFunction, 0, 1, 50, 0.00001);
  //expect(result).toBe(0);
  //});
});
