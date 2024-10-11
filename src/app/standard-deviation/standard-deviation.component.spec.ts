import { calculateStandardDeviation } from './standard-deviation.component';
import { readCSV } from '../csv-reader/csv-reader';

describe('standard deviation test suite', () => {
  const mockCsvFile = '160\n591\n114\n229\n230\n270\n128\n1657\n624\n1503\n';
  const mockCsvFile2 =
    '15.0\n69.9\n6.5\n22.4\n28.4\n65.9\n19.4\n198.7\n38.8\n138.2\n';
  const mockCsvFile3 = '';

  const csvBlob = new Blob([mockCsvFile], { type: 'text/csv' });
  const file = new File([csvBlob], 'mockData.csv');

  const csvBlob2 = new Blob([mockCsvFile2], { type: 'text/csv' });
  const file2 = new File([csvBlob2], 'mockData.csv');

  const csvBlob3 = new Blob([mockCsvFile3], { type: 'text/csv' });
  const file3 = new File([csvBlob3], 'mockData.csv');

  it('Should return standard deviation of 572.03 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', async () => {
    const data = await readCSV(file);
    const result = calculateStandardDeviation(data);

    expect(result).toBe(572.03);
  });

  it(' Should return standard deviation of 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    const data = await readCSV(file2);
    const result = calculateStandardDeviation(data);

    expect(result).toBe(62.26);
  });

  it('Should throw an error if the array is empty', async () => {
    const data = await readCSV(file3);

    expect(() => calculateStandardDeviation(data)).toThrowError('The array is empty.');
  });
});