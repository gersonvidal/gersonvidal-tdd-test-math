export class SimpsonRule {
  static simpson(
    fn: Function,
    x0: number,
    x1: number,
    numSeg: number,
    error: number
  ): number {
    let p = this.calculateSimpson(fn, x0, x1, numSeg);
    let numSegDouble = numSeg * 2;
    let pDouble = this.calculateSimpson(fn, x0, x1, numSegDouble);

    while (Math.abs(pDouble - p) > error) {
      numSeg *= 2;
      p = pDouble;
      numSegDouble = numSeg * 2;
      pDouble = this.calculateSimpson(fn, x0, x1, numSegDouble);
    }

    return pDouble;
  }

  private static calculateSimpson(
    fn: Function,
    x0: number,
    x1: number,
    numSeg: number
  ): number {
    const W = (x1 - x0) / numSeg;
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i < numSeg; i += 2) {
      oddSum += 4 * fn(x0 + i * W);
    }

    for (let i = 2; i < numSeg; i += 2) {
      evenSum += 2 * fn(x0 + i * W);
    }

    return (W / 3) * (fn(x0) + oddSum + evenSum + fn(x1));
  }

  public static twoTimesX(x: number): number {
    return 2 * x;
  }

  public static xSquared(x: number): number {
    return x * x;
  }

  public static oneDividedByX(x: number): number {
    return 1 / x;
  }

  public static tDistribution(x: number, dof: number): number {
    const numerator = this.gamma((dof + 1) / 2);
    const denominator = Math.sqrt(dof * Math.PI) * this.gamma(dof / 2);
    const exponent = -((dof + 1) / 2);

    return (
      (numerator / denominator) * Math.pow(1 + this.xSquared(x) / dof, exponent)
    );
  }

  public static gamma(n: number): number {
    if (n === 1) return 1;
    if (n === 0.5) return Math.sqrt(Math.PI);
    return (n - 1) * this.gamma(n - 1);
  }
}