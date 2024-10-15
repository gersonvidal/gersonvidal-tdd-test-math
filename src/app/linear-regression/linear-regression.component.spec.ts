import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRegressionComponent } from './linear-regression.component';
import { readCsvWithHeaders } from '../csv-reader/csv-reader';

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

    it('Should return B0 = -22.55 with the dataset Data_Test1', async () => {
      const dataset = await readCsvWithHeaders(csvFile);
      const result = LinearRegressionComponent.calculateB0(dataset);

      expect(result).toBe(-22.55);
    });

    it('Should return B1 = 1.7279 with the dataset Data_Test1', async () => {
      const dataset = await readCsvWithHeaders(csvFile);
      const result = LinearRegressionComponent.calculateB1(dataset);

      expect(result).toBe(1.7279);
    });

    it('Should return yk = 644.429 with the dataset Data_Test1 if x=386', async () => {
      const dataset = await readCsvWithHeaders(csvFile);
      const result = LinearRegressionComponent.calculateYk(dataset);

      expect(result).toBe(644.429);
    });
  });
});
