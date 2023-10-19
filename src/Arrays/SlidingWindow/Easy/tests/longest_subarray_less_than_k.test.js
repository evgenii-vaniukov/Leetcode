import {longestSubarrayLessThanK} from "../longest_subarray_less_than_k";

describe("Testing 'Longest Subarray Less Than or Equal to K' Algorithm", () => {
  test("should return 0 when given an empty array", () => {
    const arr = [];
    const expectedOutput = 0;
    expect(longestSubarrayLessThanK(arr, 1)).toEqual(expectedOutput);
  });

  test("Array with uneven length", () => {
    const arr = [3, 1, 2, 7, 4, 2, 1, 1, 5];
    const k = 8;
    const expectedOutput = 4;
    expect(longestSubarrayLessThanK(arr, k)).toEqual(expectedOutput);
  });

  test("Array with even length", () => {
    const arr = [1, 3, 5, 7];
    const k = 5;
    const expectedOutput = 2;
    expect(longestSubarrayLessThanK(arr, k)).toEqual(expectedOutput);
  });

  test("K less than every subarray", () => {
    const arr = [2, 3];
    const k = 1;
    const expectedOutput = 0;
    expect(longestSubarrayLessThanK(arr, k)).toEqual(expectedOutput);
  });

  test("K is equal to the first element and every other is greater than K", () => {
    const arr = [4, 5, 6, 7, 9, 5];
    const k = 4;
    const expectedOutput = 1;
    expect(longestSubarrayLessThanK(arr, k)).toEqual(expectedOutput);
  });
  test("K is equal to the first and last element; every other element is greater than K ", () => {
    const arr = [1, 2, 3, 4, 1];
    const k = 1;
    const expectedOutput = 1;
    expect(longestSubarrayLessThanK(arr, k)).toEqual(expectedOutput);
  });
});
