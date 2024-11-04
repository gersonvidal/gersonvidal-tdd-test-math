import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], 
})
export class MeanComponent implements OnInit {
  numberInput: number | null = null;
  numbers: number[] = [];
  meanResult: number | string = '';

  ngOnInit(): void {}

  addNumber() {
    if (this.numberInput !== null) {
      this.numbers.push(this.numberInput);
      this.numberInput = null;
    }
  }

  calculateMean() {
    try {
      this.meanResult = MeanComponent.calculateMean(this.numbers);
    } catch (error) {
      this.meanResult = 'Error: No valid numbers added';
    }
  }

  static calculateMean(array: number[]) {
    if (array.length === 0) {
      throw new Error('The array is empty.');
    }

    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const mean = sum / array.length;

    return parseFloat(mean.toFixed(2));
  }
}
