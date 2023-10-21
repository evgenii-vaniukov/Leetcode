import {maxConsecutiveOnes} from "../max_consecutive_ones_2";

describe("Testing 'Max Consecutive Ones II' Algorithm", () => {
  test("Test 1", () => {
    const arr = [1, 0, 1, 1, 0];
    const expectedOutput = 4;
    expect(maxConsecutiveOnes(arr)).toEqual(expectedOutput);
  });
});
