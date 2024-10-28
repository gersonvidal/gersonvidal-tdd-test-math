import { Component } from '@angular/core';
import { SimpsonRule } from '../common/simpson-rule';

@Component({
  selector: 'app-simpson',
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'],
})
export class SimpsonComponent {
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
