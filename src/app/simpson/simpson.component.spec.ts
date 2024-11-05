import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpsonRule } from '../common/simpson-rule';
import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Simpson Data Tests', () => {
    it('Should return p = 16.0 if x0 = 0, x1 = 4, num_seg = 4, ERROR = 0.0001 and f(x) = 2x', () => {
      const x0 = 0;
      const x1 = 4;
      const numSeg = 4;
      const error = 0.0001;
      const fn = SimpsonRule.twoTimesX;

      const result = SimpsonComponent.calculateP(fn, x0, x1, numSeg, error);
      expect(result).toBeCloseTo(16.0, 1);
    });

    it('Should return p = 0.3333 if x0 = 0, x1 = 1, num_seg = 4, ERROR = 0.0001 and f(x) = x^2', () => {
      const x0 = 0;
      const x1 = 1;
      const numSeg = 4;
      const error = 0.0001;
      const fn = SimpsonRule.xSquared;

      const result = SimpsonComponent.calculateP(fn, x0, x1, numSeg, error);
      expect(result).toBeCloseTo(0.3333, 4);
    });

    it('Should return p = 1.386 if x0 = 1, x1 = 4, num_seg = 6, ERROR = 0.001 and f(x) = 1/x', () => {
      const x0 = 1;
      const x1 = 4;
      const numSeg = 6;
      const error = 0.0001;
      const fn = SimpsonRule.oneDividedByX;

      const result = SimpsonComponent.calculateP(fn, x0, x1, numSeg, error);
      expect(result).toBeCloseTo(1.386, 3);
    });

    it('should return p = 0.35006 with t-distribution for x = 1.1 and dof = 9', () => {
      const x0 = 0;
      const x1 = 1.1;
      const numSeg = 6;
      const error = 0.0001;
      const dof = 9;

      const result = SimpsonComponent.calculateP(
        (x: number) => SimpsonRule.tDistribution(x, dof),
        x0,
        x1,
        numSeg,
        error
      );
      expect(result).toBeCloseTo(0.35006, 4);
    });

    it('should return p = 0.36757 with t-distribution for x = 1.1812 and dof = 10', () => {
      const x0 = 0;
      const x1 = 1.1812;
      const numSeg = 6;
      const error = 0.0001;
      const dof = 10;

      const result = SimpsonComponent.calculateP(
        (x: number) => SimpsonRule.tDistribution(x, dof),
        x0,
        x1,
        numSeg,
        error
      );
      expect(result).toBeCloseTo(0.36757, 4);
    });

    it('should return p = 0.49500 with t-distribution for x = 2.750 and dof = 30', () => {
      const x0 = 0;
      const x1 = 2.75;
      const numSeg = 6;
      const error = 0.0001;
      const dof = 30;

      const result = SimpsonComponent.calculateP(
        (x: number) => SimpsonRule.tDistribution(x, dof),
        x0,
        x1,
        numSeg,
        error
      );
      expect(result).toBeCloseTo(0.495, 5);
    });
  });

  describe('Simpson Data Tests', () => {
    it('should initialize selectedFunction as "twoTimesX"', () => {
      const result = component.selectedFunction;

      expect(result).toBe('twoTimesX');
    });

    it('should initialize x0 as 0', () => {
      const result = component.x0;

      expect(result).toBe(0);
    });

    it('should initialize x1 as 0', () => {
      const result = component.x1;

      expect(result).toBe(0);
    });

    it('should initialize numSeg as 10', () => {
      const result = component.numSeg;

      expect(result).toBe(10);
    });

    it('should initialize error as 0.0001', () => {
      const result = component.error;

      expect(result).toBe(0.0001);
    });

    it('should initialize dof as 1', () => {
      const result = component.dof;

      expect(result).toBe(1);
    });

    it('should initialize result as null', () => {
      const result = component.result;

      expect(result).toBeNull();
    });

    it('should calculate result using SimpsonComponent.calculateP when a valid function is selected', () => {
      spyOn(SimpsonComponent, 'calculateP').and.returnValue(42);
      component.selectedFunction = 'twoTimesX';

      component.calculateSimpson();

      expect(SimpsonComponent.calculateP).toHaveBeenCalled();
      expect(component.result).toBe(42);
    });

    it('should alert if the selected function is invalid', () => {
      spyOn(window, 'alert');
      component.selectedFunction = 'invalidFunction';

      component.calculateSimpson();

      expect(window.alert).toHaveBeenCalledWith(
        'Error: Selected function is invalid'
      );
    });

    it('should return the correct function for selectedFunction "twoTimesX"', () => {
      component.selectedFunction = 'twoTimesX';

      const fn = component['getSelectedFunction']();

      expect(fn).toBe(SimpsonRule.twoTimesX);
    });

    it('should return the correct function for selectedFunction "xSquared"', () => {
      component.selectedFunction = 'xSquared';

      const fn = component['getSelectedFunction']();

      expect(fn).toBe(SimpsonRule.xSquared);
    });

    it('should return the correct function for selectedFunction "oneDividedByX"', () => {
      component.selectedFunction = 'oneDividedByX';

      const fn = component['getSelectedFunction']();

      expect(fn).toBe(SimpsonRule.oneDividedByX);
    });

    it('should return the correct function for selectedFunction "tDistribution"', () => {
      component.selectedFunction = 'tDistribution';
      component.dof = 5;
      const xValue = 1;
      const expectedValue = SimpsonRule.tDistribution(xValue, component.dof);

      const fn = component['getSelectedFunction']();

      if (fn) {
        const result = fn(xValue);

        expect(result).toBe(expectedValue);
      } else {
        fail(
          'getSelectedFunction returned null when it should have returned a function'
        );
      }
    });

    it('should return null if the selectedFunction is invalid', () => {
      component.selectedFunction = 'invalidFunction';

      const fn = component['getSelectedFunction']();

      expect(fn).toBeNull();
    });
  });
});
