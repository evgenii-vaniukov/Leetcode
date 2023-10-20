import {maxConsecutiveOnes} from "../max_consecutive_ones_3";

describe("Testing 'Max Consecutive Ones III' Algorithm", () => {
  test("Test 1", () => {
    const arr = [1, 0, 0, 1, 0, 1];
    const k = 2;
    const expectedOutput = 4;
    expect(maxConsecutiveOnes(arr, k)).toEqual(expectedOutput);
  });

  test("Test 2", () => {
    const arr = [1];
    const k = 0;
    const expectedOutput = 1;
    expect(maxConsecutiveOnes(arr, k)).toEqual(expectedOutput);
  });
  test("Test 3", () => {
    const arr = [0, 0, 0, 1, 0, 0, 0, 0, 1];
    const k = 3;
    const expectedOutput = 4;
    expect(maxConsecutiveOnes(arr, k)).toEqual(expectedOutput);
  });

  test("Test 4", () => {
    const arr = [0, 0, 0, 1, 0, 0, 0, 0, 1];
    const k = 7;
    const expectedOutput = arr.length;
    expect(maxConsecutiveOnes(arr, k)).toEqual(expectedOutput);
  });
  test("Test 4", () => {
    const arr = [0, 0];
    const k = 2;
    const expectedOutput = arr.length;
    expect(maxConsecutiveOnes(arr, k)).toEqual(expectedOutput);
  });
});
