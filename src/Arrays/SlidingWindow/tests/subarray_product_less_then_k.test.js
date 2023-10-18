import {subarrayProductLessThanK} from "../subarray_product_less_then_k";

import {describe, expect} from "vitest";

describe("Testing 'Subarray Product Less Than K' Algorithm", () => {
  test("Test 1", () => {
    const arr = [10, 5, 2, 6];
    const k = 100;
    const expectedOutput = 8;
    expect(subarrayProductLessThanK(arr, k)).toEqual(expectedOutput);
  });
});
