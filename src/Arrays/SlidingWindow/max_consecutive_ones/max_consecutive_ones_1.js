// Solution to a LeetCode problem: Max Consecutive Ones

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Easy.
*/

// Given a binary array nums,
// return the maximum number of consecutive 1's in the array.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @return {number}
 */

export function maxConsecutiveOnes(arr) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);

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
