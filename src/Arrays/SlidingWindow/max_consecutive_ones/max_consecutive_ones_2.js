// Solution to a LeetCode problem: Max Consecutive Ones II

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Medium.
*/

// Given a binary array nums,
// return the maximum number of consecutive 1's in the array.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} nums
 * @return {number}
 */

export function maxConsecutiveOnes(arr) {
  let ans = 0;
  let curr = 0;
  const n = arr.length;

  for (let right = 0; right < n; right++) {
    if (arr[right] == 1) {
      curr++;
    } else {
      ans = Math.max(curr, ans);
      curr = 0;
    }
  }
  return Math.max(ans, curr);
}
