// Solution to a LeetCode problem: Squares of a Sorted Array

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Easy.
*/

// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @return {number[]}
 */

export function sortedSquares(arr) {
  // Time Complexity: O(n);
  // Space Complexity: O(n);

  let result = new Array(arr.length);
  let left = 0;
  let right = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result[i] = arr[left] * arr[left];
      left++;
    } else {
      result[i] = arr[right] * arr[right];
      right--;
    }
  }
  return result;
}
