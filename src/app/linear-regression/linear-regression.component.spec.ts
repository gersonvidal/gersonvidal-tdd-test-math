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
    const proxy_size = '130\n650\n99\n150\n128\n302\n95\n945\n368\n961\n';
    const actual_added = '186\n699\n132\n272\n291\n331\n199\n1890\n788\n1601\n';

    const proxySizeArray = proxy_size.trim().split('\n');
    const actualAddedArray = actual_added.trim().split('\n');

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

    it('Should return B0 = -22.55 with the dataset when proxy_size = [130,650,99,150,128,302,95,945,368,961] and actual_added = [186,699,132,272,291,31,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);

      const result = LinearRegressionComponent.calculateBeta0(beta1, dataset);

      expect(result).toBeCloseTo(-22.55, 2);
    });

    it('Should return B1 = 1.7279 with the dataset when proxy_size = [130,650,99,150,128,302,95,945,368,961] and actual_added = [186,699,132,272,291,31,199,1890,788,1601]', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const result = LinearRegressionComponent.calculateBeta1(dataset);

      expect(result).toBeCloseTo(1.7279, 4);
    });

    it('Should return yk = 644.429 with the dataset when proxy_size = [130,650,99,150,128,302,95,945,368,961] and actual_added = [186,699,132,272,291,31,199,1890,788,1601] and if x = 386', async () => {
      const dataset = await readCsvWithColumns(csvFile);
      const beta1 = LinearRegressionComponent.calculateBeta1(dataset);
      const beta0 = LinearRegressionComponent.calculateBeta0(beta1, dataset);
      const xk = 386;

      const result = LinearRegressionComponent.calculateY(beta0, beta1, xk);

      expect(result).toBeCloseTo(644.429, 3);
    });
  });
});
