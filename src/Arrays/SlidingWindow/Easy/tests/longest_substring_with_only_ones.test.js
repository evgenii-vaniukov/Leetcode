import {longestSubstringWithOnlyOnes} from "../longest_substring_with_only_ones";

describe("Testing 'Longest Substring With Only Ones' Algorithm", () => {
  test("Test 1", () => {
    const s = "1101100111";
    const expectedOutput = 5;
    expect(longestSubstringWithOnlyOnes(s)).toEqual(expectedOutput);
  });
});
