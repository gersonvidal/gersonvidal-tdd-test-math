export function simpson(
  f: Function,
  x0: number,
  x1: number,
  num_seg: number,
  error: number
): number {
  let numSeg = num_seg;
  let w = (x1 - x0) / numSeg; // segment width
  let result = integrate(f, x0, x1, numSeg);
  let newResult;

  do {
    numSeg *= 2; // Double the number of segments
    newResult = integrate(f, x0, x1, numSeg);
    if (Math.abs(newResult - result) < error) break;
    result = newResult;
  } while (true);

  return newResult;
}

function integrate(
  f: Function,
  x0: number,
  x1: number,
  numSeg: number
): number {
  const w = (x1 - x0) / numSeg; 
  let sum = f(x0) + f(x1);

  for (let i = 1; i < numSeg; i++) {
    const xi = x0 + i * w;
    sum += (i % 2 === 0 ? 2 : 4) * f(xi);
  }

  return (w / 3) * sum;
}

function gamma(n: number): number {
  // Lanczos approximation for Gamma function
  const p = [
    676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012,
    9.9843695780195716e-6, 1.5056327351493116e-7,
  ];

  let x = p[0];
  for (let i = 1; i < p.length; i++) {
    x += p[i] / (n + i);
  }

  const t = n + p.length - 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n - 0.5) * Math.exp(-t) * x;
}

export function tDistribution(x: number, dof: number): number {
  if (dof <= 0) return 0; // Prevent invalid degrees of freedom
  const gammaNumerator = gamma((dof + 1) / 2);
  const gammaDenominator = Math.sqrt(dof * Math.PI) * gamma(dof / 2);
  const multiplier = Math.pow(1 + (x * x) / dof, -(dof + 1) / 2);
  return (gammaNumerator / gammaDenominator) * multiplier;
}

export function f1(x: number): number {
  return 2 * x;
}

export function f2(x: number): number {
  return x * x;
}

export function f3(x: number): number {
  return 1 / x;
}

export function f4(x: number): number {
  return tDistribution(x, 9); 
}

export function f5(x: number): number {
  return tDistribution(x, 10); 
}

export function f6(x: number): number {
  return tDistribution(x, 30); 
}
