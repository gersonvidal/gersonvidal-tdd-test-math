import { Component, OnInit } from '@angular/core';
import { MeanComponent } from '../mean/mean.component';

@Component({
  selector: 'app-standard-deviation',
  templateUrl: './standard-deviation.component.html',
  styleUrls: ['./standard-deviation.component.css'],
})
export class StandardDeviationComponent implements OnInit {
  ngOnInit(): void {}

  static calculateStandardDeviation(array: number[]): number {
    if (array.length === 0) {
      throw new Error('The array is empty.');
    }

    const mean = MeanComponent.calculateMean(array);

    const sumOfSquaredDifferences = array.reduce(
      (accumulator, currentValue) => {
        const difference = currentValue - mean;
        return accumulator + Math.pow(difference, 2);
      },
      0
    );

    const variance = sumOfSquaredDifferences / (array.length - 1);

    const standardDeviation = Math.sqrt(variance);

    return parseFloat(standardDeviation.toFixed(2));
  }
}
