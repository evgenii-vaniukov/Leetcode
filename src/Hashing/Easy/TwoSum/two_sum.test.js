import {twoSum} from "./two_sum.ts";
describe("Testing 'Two Sum' Algorithm", () => {
  test("Test 1", () => {
    const arr = [9, 1, 4];
    const target = 13;
    const expectedOutput1 = [2, 0];
    const expectedOutput2 = [0, 2];
    expect(twoSum(arr, target)).toEqual([expectedOutput1, expectedOutput2]);
  });
  test("Test 2", () => {
    const arr = [9, 4];
    const target = 13;
    const expectedOutput1 = [1, 0];
    const expectedOutput2 = [0, 1];

    expect(twoSum(arr, target)).toEqual([expectedOutput1, expectedOutput2]);
  });
});
