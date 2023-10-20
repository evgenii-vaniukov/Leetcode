import {maxConsecutiveOnes} from "../max_consecutive_ones_2";

describe("Testing 'Max Consecutive Ones' Algorithm", () => {
  test("Test 1", () => {
    const arr = [1, 1, 0, 1, 1, 1];
    const expectedOutput = 3;
    expect(maxConsecutiveOnes(arr)).toEqual(expectedOutput);
  });
});
