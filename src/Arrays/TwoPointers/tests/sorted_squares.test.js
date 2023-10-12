import {sortedSquares} from "../sorted_squares";

describe("Testing Sorted Squares Algorithm", () => {
  it("Array with multiole elements", () => {
    const Array = [-7, -3, 2, 3, 11];
    expect(sortedSquares(Array)).toEqual([4, 9, 9, 49, 121]);
  });
});
