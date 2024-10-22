import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  it('Should return p = 16.0 if x0 = 0, x1 = 4, num_seg = 4, ERROR = 0.0001 and f(x) = 2x', () => {
    const x0 = 0; 
    const x1 = 4;
    const numSeg = 4; 
    const error  = 0.0001; 
    // TODO: const f(x) = 2x

    expect(SimpsonComponent.calculateSimpson(x0, x1, numSeg, error, fn)).toBe(16.0);
  });

  it('Should return p = 0.3333 if x0 = 0, x1 = 1, num_seg = 4, ERROR = 0.0001 and f(x) = x^2', () => {
    const x0 = 0; 
    const x1 = 1;
    const numSeg = 4; 
    const error  = 0.0001; 
    // TODO: const f(x) = x^2

    expect(SimpsonComponent.calculateSimpson(x0, x1, numSeg, error, fn)).toBe(0.3333);
  });

  it('Should return p = 1.38 if x0 = 1, x1 = 4, num_seg = 6, ERROR = 0.0001 and f(x) = 1/x', () => {
    const x0 = 1; 
    const x1 = 4;
    const numSeg = 6; 
    const error  = 0.0001; 
    // TODO: const f(x) = 1/x

    expect(SimpsonComponent.calculateSimpson(x0, x1, numSeg, error, fn)).toBe(1.38);
  });

});
