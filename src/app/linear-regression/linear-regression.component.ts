import { Component } from '@angular/core';
import { sumX, sumY, sumXY, sumX2} from '../common/calculate';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [],
  templateUrl: './linear-regression.component.html',
  styleUrl: './linear-regression.component.css',
})
export class LinearRegressionComponent {

  static calculateBeta1(data: number[][]): number {
    const n = data.length; // Get the length of the data

    if (n === 0) {
      throw new Error('Data set cannot be empty');
    }

    // Initialize summations
    let sumXResult = sumX(data);
    let sumYResult = sumY(data);
    let sumX2Result = sumX2(data);
    let sumXYResult = sumXY(data);

    // Calculate averages
    const avgX = sumXResult / n;
    const avgY = sumYResult / n;

    // Calculate beta1 using the formula
    const beta1 =
      (sumXYResult - n * avgX * avgY) / (sumX2Result - n * (avgX * avgX));

    // return parseFloat(beta1.toFixed(4));
    return beta1;
  }

  static calculateBeta0(beta1: number, data: number[][]): number {
    const n = data.length;

    if (n === 0) {
      throw new Error('Data set cannot be empty');
    }

    let sumXResult = sumX(data);
    let sumYResult = sumY(data);

    const avgX = sumXResult / n;
    const avgY = sumYResult / n;

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
