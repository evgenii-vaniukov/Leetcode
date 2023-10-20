import {kRadiusSubarrayAverages} from "../k_radius_subarray_averages";

describe("Testing 'K Radius Subarray Averages' Algorithm", () => {
  test("Test 1", () => {
    const arr = [7, 4, 3, 9, 1, 8, 5, 2, 6];
    const k = 3;
    const expectedOutput = [-1, -1, -1, 5, 4, 4, -1, -1, -1];
    expect(kRadiusSubarrayAverages(arr, k)).toEqual(expectedOutput);
  });
  test("Test 2", () => {
    const arr = [1];
    const k = 0;
    const expectedOutput = [1];
    expect(kRadiusSubarrayAverages(arr, k)).toEqual(expectedOutput);
  });
  test("Test 2", () => {
    const arr = [1];
    const k = 10;
    const expectedOutput = [-1];
    expect(kRadiusSubarrayAverages(arr, k)).toEqual(expectedOutput);
  });
});
