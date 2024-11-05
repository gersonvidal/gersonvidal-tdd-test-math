import { MeanComponent } from './mean.component';
import { readCsv } from '../csv-reader/csv-reader';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('mean test suite', () => {
  let component: MeanComponent;
  let fixture: ComponentFixture<MeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('mean data tests', () => {
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

    it('Should return mean of 550.6 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', async () => {
      const data = await readCsv(file);
      const result = MeanComponent.calculateMean(data);

      expect(result).toBe(550.6);
    });

    it('Should return mean of 60.32 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
      const data = await readCsv(file2);
      const result = MeanComponent.calculateMean(data);

      expect(result).toBe(60.32);
    });

    it('Should throw an error if the array is empty', async () => {
      const data = await readCsv(file3);

      expect(() => MeanComponent.calculateMean(data)).toThrowError(
        'The array is empty.'
      );
    });
  });

  describe('Mean Component Tests', () => {
    it('should initialize numberInput as null', () => {
      const result = component.numberInput;

      expect(result).toBeNull();
    });

    it('should initialize numbers as an empty array', () => {
      const result = component.numbers;

      expect(result).toEqual([]);
    });

    it('should initialize meanResult as an empty string', () => {
      const result = component.meanResult;

      expect(result).toEqual('');
    });

    it('should define ngOnInit', () => {
      const result = component.ngOnInit;

      expect(result).toBeDefined();
    });

    it('should add number to numbers array and reset numberInput when addNumber is called with a valid numberInput', () => {
      component.numberInput = 5;

      component.addNumber();

      expect(component.numbers).toContain(5);
      expect(component.numberInput).toBeNull();
    });

    it('should not add anything to numbers array when numberInput is null', () => {
      component.numberInput = null;

      component.addNumber();

      expect(component.numbers.length).toBe(0);
    });

    it('should calculate the mean and set meanResult when calculateMean is called with valid numbers', () => {
      component.numbers = [1, 2, 3, 4, 5];
      
      component.calculateMean();
      
      expect(component.meanResult).toBe(3); 
    });

    it('should set meanResult to an error message if numbers array is empty', () => {
      component.numbers = [];
     
      component.calculateMean();
     
      expect(component.meanResult).toEqual('Error: No valid numbers added');
    });

  });
});
