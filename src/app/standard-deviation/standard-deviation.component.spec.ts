import { StandardDeviationComponent } from './standard-deviation.component';
import { readCsv } from '../csv-reader/csv-reader';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('standard deviation test suite', () => {
  let component: StandardDeviationComponent;
  let fixture: ComponentFixture<StandardDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardDeviationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Data tests', () => {
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
      const data = await readCsv(file);
      const result =
        StandardDeviationComponent.calculateStandardDeviation(data);

      expect(result).toBe(572.03);
    });

    it(' Should return standard deviation of 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
      const data = await readCsv(file2);
      const result =
        StandardDeviationComponent.calculateStandardDeviation(data);

      expect(result).toBe(62.26);
    });

    it('Should throw an error if the array is empty', async () => {
      const data = await readCsv(file3);

      expect(() =>
        StandardDeviationComponent.calculateStandardDeviation(data)
      ).toThrowError('The array is empty.');
    });
  });

  describe('Standard Deviation Component Tests', () => {
    it('should initialize numberInput as null', () => {
      const result = component.numberInput;

      expect(result).toBeNull();
    });

    it('should initialize numbers as an empty array', () => {
      const result = component.numbers;

      expect(result).toEqual([]);
    });

    it('should initialize stdDeviationResult as an empty string', () => {
      const result = component.stdDeviationResult;

      expect(result).toEqual('');
    });

    it('should call ngOnInit', () => {
      const result = component.ngOnInit;

      expect(result).toBeDefined();
    });

    it('should add number to numbers array when addNumber is called with a valid numberInput', () => {
      component.numberInput = 5;

      component.addNumber();

      expect(component.numbers).toContain(5);
      expect(component.numberInput).toBeNull();
    });

    it('should not add number to numbers array when numberInput is null', () => {
      component.numberInput = null;

      component.addNumber();

      expect(component.numbers.length).toBe(0);
    });

    it('should calculate the standard deviation correctly', () => {
      component.numbers = [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ];

      component.calculateStandardDeviation();

      expect(component.stdDeviationResult).toBeCloseTo(62.26, 2);
    });

    it('should set stdDeviationResult to error message if there is an error in calculation', () => {
      component.numbers = [];
      
      component.calculateStandardDeviation();
      
      expect(component.stdDeviationResult).toEqual(
        'Error: Please enter valid numbers.'
      );
    });
  });
});
