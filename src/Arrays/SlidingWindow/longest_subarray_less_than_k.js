// Solution to a LeetCode problem: Longest Subarray Less Than or Equal to K.

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Easy.
*/

// Given an array of positive integers nums and an integer k,
// find the length of the longest subarray whose sum is less than or equal to k.

// Find examples in the 'tests' folder.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

export function longestSubarrayLessThanK(arr, k) {
  // Time Complexity: O(n).
  // Space Complexity: O(1).
  let left = 0;
  let curr = 0;
  let ans = 0;

  for (let right = 0; right < arr.length; right++) {
    curr += arr[right];
    while (curr > k) {
      curr -= arr[left];
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}
