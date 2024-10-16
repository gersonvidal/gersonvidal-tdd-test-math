import { Component } from '@angular/core';
import { sumX, sumY, sumXY, sumX2, sumY2 } from '../common/calculate';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css',
})
export class CorrelationComponent {
  static calculateCorrelationCoefficient(data: number[][]): number {
    const n = data.length;

    if (n === 0) {
      throw new Error('Matrix cannot be empty');
    }

    let sumXResult = sumX(data);
    let sumYResult = sumY(data);
    let sumX2Result = sumX2(data);
    let sumY2Result = sumY2(data);
    let sumXYResult = sumXY(data);

    // rxy formula
    const numerator = n * sumXYResult - sumXResult * sumYResult;
    const denominatorX = n * sumX2Result - sumXResult * sumXResult;
    const denominatorY = n * sumY2Result - sumYResult * sumYResult;

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
}
