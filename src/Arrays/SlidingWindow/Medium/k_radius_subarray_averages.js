// Solution to a LeetCode problem: K Radius Subarray Averages

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Medium.
*/

// You are given a 0-indexed array nums of n integers, and an integer k.
// The k-radius average for a subarray of nums centered at some index i with
// the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive).
// If there are less than k elements before or after the index i,
// then the k-radius average is -1.

// Build and return an array avgs of length n where avgs[i] is the k-radius
// average for the subarray centered at index i.

// The average of x elements is the sum of the x elements divided by x,
// using integer division. The integer division truncates toward zero,
// which means losing its fractional part.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

export function kRadiusSubarrayAverages(arr, k) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);

  let ans = new Array(arr.length).fill(-1);

  if (2 * k + 1 > arr.length) {
    return ans;
  }

  let left = 0;
  let curr = 0;

  for (let right = 0; right < 2 * k + 1; right++) {
    curr += arr[right];
  }
  ans[k] = Math.floor(curr / (2 * k + 1));

  for (let right = 2 * k + 1; right < arr.length; right++) {
    curr += arr[right] - arr[left];
    ans[right - k] = Math.floor(curr / (2 * k + 1));
    left++;
  }

  return ans;
}
