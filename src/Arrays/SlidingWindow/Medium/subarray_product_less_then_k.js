// Solution to a LeetCode problem: Subarray Product Less Than K

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Medium.
*/

// Given an array of positive integers nums and an integer k,
// return the number of subarrays where the product of all
// the elements in the subarray is strictly less than k.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

export function subarrayProductLessThanK(arr, k) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);

  if (k <= 1) {
    return 0;
  }

  let left = 0;
  let ans = 0;
  let curr = 1;

  for (let right = 0; right < arr.length; right++) {
    curr *= arr[right];

    while (curr >= k) {
      curr /= arr[left];
      left++;
    }

    ans += right - left + 1;
  }
  return ans;
}
