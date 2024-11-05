import { Component } from '@angular/core';
import { SimpsonRule } from '../common/simpson-rule';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SimpsonComponent {
  selectedFunction: string = 'twoTimesX';
  x0: number = 0;
  x1: number = 0;
  numSeg: number = 10;
  error: number = 0.0001;
  dof: number = 1; 
  result: number | null = null;

  calculateSimpson() {
    const fn = this.getSelectedFunction();
    if (fn) {
      this.result = SimpsonComponent.calculateP(
        fn,
        this.x0,
        this.x1,
        this.numSeg,
        this.error
      );
    } else {
      alert('Error: Selected function is invalid');
    }
  }

  private getSelectedFunction(): Function | null {
    switch (this.selectedFunction) {
      case 'twoTimesX':
        return SimpsonRule.twoTimesX;
      case 'xSquared':
        return SimpsonRule.xSquared;
      case 'oneDividedByX':
        return SimpsonRule.oneDividedByX;
      case 'tDistribution':
        return (x: number) => SimpsonRule.tDistribution(x, this.dof);
      default:
        return null;
    }
  }

  static calculateP(
    fn: Function,
    x0: number,
    x1: number,
    numSeg: number,
    error: number
  ) {
    return SimpsonRule.simpson(fn, x0, x1, numSeg, error);
  }
}
