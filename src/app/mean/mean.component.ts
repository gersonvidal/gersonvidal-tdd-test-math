export function calculateMean(array: number[]) {
  if (array.length === 0) {
    throw new Error("The array is empty.");
  }

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const mean = sum / array.length;

  return parseFloat(mean.toFixed(2));
}