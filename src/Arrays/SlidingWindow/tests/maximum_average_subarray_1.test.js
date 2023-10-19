import {maximumAverageSubarray} from "../maximum_average_subarray_1";

describe("Testing 'Maximum Average Subarray I' Algorithm", () => {
  test("Test 1", () => {
    const arr = [1, 12, -5, -6, 50, 3];
    const k = 4;
    const expectedOutput = 12.75;
    expect(maximumAverageSubarray(arr, k)).toEqual(expectedOutput);
  });
  test("Test 2", () => {
    const arr = [1];
    const k = 1;
    const expectedOutput = 1;
    expect(maximumAverageSubarray(arr, k)).toEqual(expectedOutput);
  });
});
