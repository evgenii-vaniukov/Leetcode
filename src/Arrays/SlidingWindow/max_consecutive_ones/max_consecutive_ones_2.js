// Solution to a LeetCode problem: Max Consecutive Ones II

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Medium.
*/

// Given a binary array nums,
// return the maximum number of consecutive 1's in the array
// if you can flip at most one 0.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @return {number}
 */

export function maxConsecutiveOnes(arr) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);

  const n = arr.length;
  let ans = 0;
  let countZeros = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    if (arr[right] == 0) {
      countZeros++;
    }

    while (countZeros > 1) {
      if (arr[left] == 0) {
        countZeros--;
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}
