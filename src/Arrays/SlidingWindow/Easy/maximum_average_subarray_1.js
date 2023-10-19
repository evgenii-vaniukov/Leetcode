// Solution to a LeetCode problem: Maximum Average Subarray I

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Easy.
*/

// You are given an integer array consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k
// that has the maximum average value and return this value.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

export function maximumAverageSubarray(arr, k) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);
  let curr = 0;

  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }
  let ans = curr / k;

  for (let i = k; i < arr.length; i++) {
    curr += arr[i] - arr[i - k];
    ans = Math.max(ans, curr / k);
  }

  return ans;
}
