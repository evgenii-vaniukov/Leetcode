// Solution to a LeetCode problem: Longest Subarray/Substring With Only Ones.

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Easy.
*/

// You are given a binary string s (a string containing only "0" and "1").
// ou may choose up to one "0" and flip it to a "1".
// What is the length of the longest substring achievable that contains only "1"?

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {string} s
 * @return {number}
 */

export function longestSubstringWithOnlyOnes(s) {
  // Time Complexity: O(n).
  // Space Complexity: O(1).
  let ans = 0,
    countZeros = 0,
    left = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] == "0") {
      countZeros++;
    }

    while (countZeros > 1) {
      if (s[left] == "0") {
        countZeros--;
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}
