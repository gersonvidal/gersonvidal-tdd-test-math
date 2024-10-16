import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationComponent } from './correlation.component';
import { readCsvWithColumns } from '../csv-reader/csv-reader';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrelationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrelationComponent);
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

    it('Should return r = 0.9545 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const result =
        CorrelationComponent.calculateCorrelationCoefficient(dataset);

      expect(result).toBeCloseTo(0.9545, 4);
    });

    it('Should return rr = 0.9111 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const r = CorrelationComponent.calculateCorrelationCoefficient(dataset);
      const result = CorrelationComponent.calculateRSquared(r);

      expect(result).toBeCloseTo(0.9111, 4);
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

    it('Should return r = 0.9333 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const result =
        CorrelationComponent.calculateCorrelationCoefficient(dataset);

      expect(result).toBeCloseTo(0.9333, 4);
    });

    it('Should return rr = 0.8711 with the dataset when proxySize = [130,650,99,150,128,302,95,945,368,961] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const r = CorrelationComponent.calculateCorrelationCoefficient(dataset);
      const result = CorrelationComponent.calculateRSquared(r);

      expect(result).toBeCloseTo(0.8711, 4);
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

    it('Should return r = 0.9631 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const result =
        CorrelationComponent.calculateCorrelationCoefficient(dataset);

      expect(result).toBeCloseTo(0.9631, 4);
    });

    it('Should return rr = 0.9276 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualAdded = [186,699,132,272,291,331,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const r = CorrelationComponent.calculateCorrelationCoefficient(dataset);
      const result = CorrelationComponent.calculateRSquared(r);

      expect(result).toBeCloseTo(0.9276, 4);
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

    it('Should return r = 0.9480 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const result =
        CorrelationComponent.calculateCorrelationCoefficient(dataset);

      expect(result).toBeCloseTo(0.948, 4);
    });

    it('Should return rr = 0.8988 with the dataset when planAdded = [163,765,141,166,137,355,136,1206,433,1130] and actualDevelop = [15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      const r = CorrelationComponent.calculateCorrelationCoefficient(dataset);
      const result = CorrelationComponent.calculateRSquared(r);

      expect(result).toBeCloseTo(0.8988, 4);
    });
  });

  describe('Edge cases', () => {
    const emptyCsv = '';

    const csvBlob = new Blob([emptyCsv], { type: 'text/csv' });
    const csvFile = new File([csvBlob], 'data.csv');

    const sameDenominator1 = '1\n1\n1\n1\n';
    const sameDenominator2 = '1\n1\n1\n1\n';

    const sameDenominator1Array = sameDenominator1.trim().split('\n');
    const sameDenominator2Array = sameDenominator2.trim().split('\n');

    let sameDenominatorCsvContent = 'same_denominator1,same_denominator2\n'; // Headers
    for (
      let i = 0;
      i < Math.min(sameDenominator1Array.length, sameDenominator2Array.length);
      i++
    ) {
      sameDenominatorCsvContent += `${sameDenominator1Array[i]},${sameDenominator2Array[i]}\n`;
    }

    const sameDenominatorCsvBlob = new Blob([sameDenominatorCsvContent], {
      type: 'text/csv',
    });
    const sameDenominatorCsvFile = new File(
      [sameDenominatorCsvBlob],
      'data.csv'
    );

    it('calculateCorrelationCoefficient should throw error when csvFile is empty', async () => {
      const dataset = await readCsvWithColumns(csvFile);

      expect(() => {
        CorrelationComponent.calculateCorrelationCoefficient(dataset);
      }).toThrowError('Matrix cannot be empty');
    });

    it('calculateCorrelationCoefficient should throw error when denominatorX or denominatorY is 0', async () => {
      const dataset = await readCsvWithColumns(sameDenominatorCsvFile);

      expect(() => {
        CorrelationComponent.calculateCorrelationCoefficient(dataset);
      }).toThrowError(
        'Cannot calculate the correlation coefficient due to division by zero'
      );
    });
  });
});
