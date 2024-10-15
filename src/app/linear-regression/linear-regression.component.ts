import { Component } from '@angular/core';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css',
})
export class LinearRegressionComponent {
  // TODO: Import SUMS from Calculate

  static calculateBeta1(data: number[][]): number {
    const n = data.length; // Get the length of the data

    if (n === 0) {
      throw new Error('Data set cannot be empty');
    }

    // Initialize summations
    let sumX = 0;
    let sumY = 0;
    let sumX2 = 0;
    let sumY2 = 0;
    let sumXY = 0;

    // Calculate the necessary summations
    for (const [x, y] of data) {
      sumX += x;
      sumY += y;
      sumX2 += x * x;
      sumY2 += y * y;
      sumXY += x * y;
    }

    // Calculate averages
    const avgX = sumX / n;
    const avgY = sumY / n;

    // Calculate beta1 using the formula
    const beta1 = (sumXY - n * avgX * avgY) / (sumX2 - n * (avgX * avgX));

    // return parseFloat(beta1.toFixed(4));
    return beta1;
  }

  static calculateCorrelationCoefficient(data: number[][]): number {
    const n = data.length;

    if (n === 0) {
      throw new Error('Matrix cannot be empty');
    }

    let sumX = 0;
    let sumY = 0;
    let sumX2 = 0;
    let sumY2 = 0;
    let sumXY = 0;

    for (const [x, y] of data) {
      sumX += x;
      sumY += y;
      sumX2 += x * x;
      sumY2 += y * y;
      sumXY += x * y;
    }

    // rxy formula
    const numerator = n * sumXY - sumX * sumY;
    const denominatorX = n * sumX2 - sumX * sumX;
    const denominatorY = n * sumY2 - sumY * sumY;

    // Avoid dividing by zero
    if (denominatorX === 0 || denominatorY === 0) {
      throw new Error(
        'Cannot calculate the correlation coefficient due to division by zero'
      );
    }

    const rxy = numerator / Math.sqrt(denominatorX * denominatorY);

    // return parseFloat(rxy.toFixed(4));
    return rxy;
  }

  static calculateRSquared(r: number): number {
    // return parseFloat((r * r).toFixed(4));
    return r * r;
  }

  static calculateBeta0(beta1: number, data: number[][]): number {
    const n = data.length;

    if (n === 0) {
      throw new Error('Data set cannot be empty');
    }

    let sumX = 0;
    let sumY = 0;

    for (const [x, y] of data) {
      sumX += x;
      sumY += y;
    }

    const avgX = sumX / n;
    const avgY = sumY / n;

    const beta0 = avgY - beta1 * avgX;

    // return parseFloat(beta0.toFixed(4));
    return beta0;
  }

  static calculateY(beta0: number, beta1: number, xk: number): number {
    const yk = beta0 + beta1 * xk;

    // return parseFloat(yk.toFixed(4));
    return yk;
  }
}
