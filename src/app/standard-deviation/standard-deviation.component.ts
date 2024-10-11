import { calculateMean } from '../mean/mean.component';

export function calculateStandardDeviation(array: number[]): number {
  if (array.length === 0) {
    throw new Error('The array is empty.');
  }

  const mean = calculateMean(array);

  const sumOfSquaredDifferences = array.reduce((accumulator, currentValue) => {
    const difference = currentValue - mean;
    return accumulator + Math.pow(difference, 2);
  }, 0);

  const variance = sumOfSquaredDifferences / (array.length - 1);

  const standardDeviation = Math.sqrt(variance);

  return parseFloat(standardDeviation.toFixed(2));
}
