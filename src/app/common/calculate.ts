export function sumX(data: number[][]): number {
    let sumX = 0;
    for (const [x] of data) {
      sumX += x;
    }
    return sumX;
  }
  
  export function sumY(data: number[][]): number {
    let sumY = 0;
    for (const [, y] of data) {
      sumY += y;
    }
    return sumY;
  }
  
  export function sumX2(data: number[][]): number {
    let sumX2 = 0;
    for (const [x] of data) {
      sumX2 += x * x;
    }
    return sumX2;
  }
  
  export function sumY2(data: number[][]): number {
    let sumY2 = 0;
    for (const [, y] of data) {
      sumY2 += y * y;
    }
    return sumY2;
  }
  
  export function sumXY(data: number[][]): number {
    let sumXY = 0;
    for (const [x, y] of data) {
      sumXY += x * y;
    }
    return sumXY;
  }