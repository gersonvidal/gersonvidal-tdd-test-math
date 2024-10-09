export const factorial = (x: number): number =>
  x < 0 || x > 15
    ? 0
    : x === 0
    ? 1
    : Array.from({ length: x }, (_, index) => index + 1).reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1
      );
