import {subarrayProductLessThanK} from "../subarray_product_less_then_k";

describe("Testing 'Subarray Product Less Than K' Algorithm", () => {
  test("Test 1", () => {
    const arr = [10, 5, 2, 6];
    const k = 100;
    const expectedOutput = 8;
    expect(subarrayProductLessThanK(arr, k)).toEqual(expectedOutput);
  });

  test("Test 2", () => {
    const arr = [1];
    const k = 0;
    const expectedOutput = 0;
    expect(subarrayProductLessThanK(arr, k)).toEqual(expectedOutput);
  });
});
