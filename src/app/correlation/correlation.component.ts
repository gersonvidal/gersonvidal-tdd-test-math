import { Component } from '@angular/core';
import { sumX, sumY, sumXY, sumX2, sumY2 } from '../common/calculate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css',
})
export class CorrelationComponent {
  xValues: string = '';
  yValues: string = '';
  correlationResult: number | null = null;
  rSquaredResult: number | null = null;

  calculateCorrelation() {
    const xArray = this.parseInput(this.xValues);
    const yArray = this.parseInput(this.yValues);

    if (xArray.length === yArray.length && xArray.length > 0) {
      const data = xArray.map((x, index) => [x, yArray[index]]);
      const r = CorrelationComponent.calculateCorrelationCoefficient(data);
      this.correlationResult = parseFloat(r.toFixed(4));
      this.rSquaredResult = parseFloat(
        CorrelationComponent.calculateRSquared(r).toFixed(4)
      );
    } else {
      alert(
        'Please ensure both X and Y values have the same number of entries.'
      );
    }
  }

  private parseInput(input: string): number[] {
    return input
      .split(',')
      .map((value) => parseFloat(value.trim()))
      .filter((value) => !isNaN(value));
  }

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
