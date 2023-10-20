import {maxConsecutiveOnes} from "../max_consecutive_ones_1";

describe("Testing 'Max Consecutive Ones' Algorithm", () => {
  test("Test 1", () => {
    const arr = [1, 1, 0, 1, 1, 1];
    const expectedOutput = 3;
    expect(maxConsecutiveOnes(arr)).toEqual(expectedOutput);
  });

  test("Test 2", () => {
    const arr = [0];
    const expectedOutput = 0;
    expect(maxConsecutiveOnes(arr)).toEqual(expectedOutput);
  });
  test("Test 3", () => {
    const arr = [0, 1];
    const expectedOutput = 1;
    expect(maxConsecutiveOnes(arr)).toEqual(expectedOutput);
  });
});
