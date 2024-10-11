import { calculateMedian } from "./median.component";

describe("median test suite", () => {
  it("Should return median of 550.6 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]", () => {
    const result = calculateMedian(column1);
    expect(result).toBe(550.6);
  });

  it("Should return median of 60.32 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]", () => {
    const result = calculateMedian(column2);
    expect(result).toBe(60.32);
  });
});
