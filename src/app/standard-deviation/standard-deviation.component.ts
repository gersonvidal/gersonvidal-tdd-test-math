import { Component, OnInit } from '@angular/core';
import { MeanComponent } from '../mean/mean.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standard-deviation',
  templateUrl: './standard-deviation.component.html',
  styleUrls: ['./standard-deviation.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class StandardDeviationComponent implements OnInit {
  numberInput: number | null = null;
  numbers: number[] = [];
  stdDeviationResult: number | string = '';

  ngOnInit(): void {}

  addNumber() {
    if (this.numberInput !== null) {
      this.numbers.push(this.numberInput);
      this.numberInput = null;
    }
  }

  calculateStandardDeviation() {
    try {
      this.stdDeviationResult =
        StandardDeviationComponent.calculateStandardDeviation(this.numbers);
    } catch (error) {
      this.stdDeviationResult = 'Error: Please enter valid numbers.';
    }
  }

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
    return parseFloat(Math.sqrt(variance).toFixed(2));
  }
}
