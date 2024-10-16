import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionComponent } from './linear-regression.component';
import { readCsvWithColumns } from '../csv-reader/csv-reader';

describe('linear regression test suite', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearRegressionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Dataset 1', () => {
    const proxySize = '130\n650\n99\n150\n128\n302\n95\n945\n368\n961\n';
    const actualAdded = '186\n699\n132\n272\n291\n331\n199\n1890\n788\n1601\n';

    const proxySizeArray = proxySize.trim().split('\n');
    const actualAddedArray = actualAdded.trim().split('\n');

    let csvContent = 'proxy_size,actual_added\n'; // Headers
    for (
      let i = 0;
      i < Math.min(proxySizeArray.length, actualAddedArray.length);
      i++
    ) {
      csvContent += `${proxySizeArray[i]},${actualAddedArray[i]}\n`;
    }

    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvFile = new File([csvBlob], 'data.csv');

    it('Should return B0 = -22.55 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualAdded = [186,699,132,272,291,31,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);

      const result = LinearRegressionComponent.calculateBeta0(beta1, dataset);

      expect(result).toBeCloseTo(-22.55, 2);
    });

    it('Should return B1 = 1.7279 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualAdded = [186,699,132,272,291,31,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const result = LinearRegressionComponent.calculateBeta1(dataset);

      expect(result).toBeCloseTo(1.7279, 4);
    });

    it('Should return yk = 644.429 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualAdded = [186,699,132,272,291,31,199,1890,788,1601] and if x = 386', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);
      const beta0 = LinearRegressionComponent.calculateBeta0(beta1, dataset);
      const xk = 386;

      const result = LinearRegressionComponent.calculateY(beta0, beta1, xk);

      expect(result).toBeCloseTo(644.429, 3);
    });
  });

  describe('Dataset 2', () => {
    const proxySize = '130\n650\n99\n150\n128\n302\n95\n945\n368\n961\n';
    const actualDevelop =
      '15.0\n69.9\n6.5\n22.4\n28.4\n65.9\n19.4\n198.7\n38.8\n138.2\n';

    const proxySizeArray = proxySize.trim().split('\n');
    const actualDevelopArray = actualDevelop.trim().split('\n');

    let csvContent = 'proxy_size,actual_develop\n'; // Headers
    for (
      let i = 0;
      i < Math.min(proxySizeArray.length, actualDevelopArray.length);
      i++
    ) {
      csvContent += `${proxySizeArray[i]},${actualDevelopArray[i]}\n`;
    }

    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvFile = new File([csvBlob], 'data.csv');

    it('Should return B0 = -4.039 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);

      const result = LinearRegressionComponent.calculateBeta0(beta1, dataset);

      expect(result).toBeCloseTo(-4.039, 3);
    });

    it('Should return B1 = 0.1681 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const result = LinearRegressionComponent.calculateBeta1(dataset);

      expect(result).toBeCloseTo(0.1681, 4);
    });

    it('Should return yk = 60.858 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2] and if x = 386', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);
      const beta0 = LinearRegressionComponent.calculateBeta0(beta1, dataset);
      const xk = 386;

      const result = LinearRegressionComponent.calculateY(beta0, beta1, xk);

      expect(result).toBeCloseTo(60.858, 3);
    });
  });

  describe('Dataset 3', () => {
    const planAdded = '163\n765\n141\n166\n137\n355\n136\n1206\n433\n1130\n';
    const actualAdded = '186\n699\n132\n272\n291\n331\n199\n1890\n788\n1601\n';

    const planAddedArray = planAdded.trim().split('\n');
    const actualAddedArray = actualAdded.trim().split('\n');

    let csvContent = 'plan_added,actual_added\n'; // Headers
    for (
      let i = 0;
      i < Math.min(planAddedArray.length, actualAddedArray.length);
      i++
    ) {
      csvContent += `${planAddedArray[i]},${actualAddedArray[i]}\n`;
    }

    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvFile = new File([csvBlob], 'data.csv');

    it('Should return B0 = -23.92 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);

      const result = LinearRegressionComponent.calculateBeta0(beta1, dataset);

      expect(result).toBeCloseTo(-23.92, 2);
    });

    it('Should return B1 = 1.43097 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const result = LinearRegressionComponent.calculateBeta1(dataset);

      expect(result).toBeCloseTo(1.43097, 5);
    });

    it('Should return yk = 528.4294 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601] and if x = 386', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);
      const beta0 = LinearRegressionComponent.calculateBeta0(beta1, dataset);
      const xk = 386;

      const result = LinearRegressionComponent.calculateY(beta0, beta1, xk);

      expect(result).toBeCloseTo(528.4294, 4);
    });
  });

  describe('Dataset 4', () => {
    const planAdded = '163\n765\n141\n166\n137\n355\n136\n1206\n433\n1130\n';
    const actualDevelop =
      '15.0\n69.9\n6.5\n22.4\n28.4\n65.9\n19.4\n198.7\n38.8\n138.2\n';

    const planAddedArray = planAdded.trim().split('\n');
    const actualDevelopArray = actualDevelop.trim().split('\n');

    let csvContent = 'plan_added,actual_develop\n'; // Headers
    for (
      let i = 0;
      i < Math.min(planAddedArray.length, actualDevelopArray.length);
      i++
    ) {
      csvContent += `${planAddedArray[i]},${actualDevelopArray[i]}\n`;
    }

    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvFile = new File([csvBlob], 'data.csv');

    it('Should return B0 = -4.604 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);

      const result = LinearRegressionComponent.calculateBeta0(beta1, dataset);

      expect(result).toBeCloseTo(-4.604, 3);
    });

    it('Should return B1 = 0.140164 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const result = LinearRegressionComponent.calculateBeta1(dataset);

      expect(result).toBeCloseTo(0.140164, 6);
    });

    it('Should return yk = 49.4994 with the dataset when when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2] and if x = 386', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);
      const beta0 = LinearRegressionComponent.calculateBeta0(beta1, dataset);
      const xk = 386;

      const result = LinearRegressionComponent.calculateY(beta0, beta1, xk);

      expect(result).toBeCloseTo(49.4994, 4);
    });
  });
});
