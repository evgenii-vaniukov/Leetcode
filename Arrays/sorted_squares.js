// Solution to a LeetCode problem: Squares of a Sorted Array.
//
// Topic: Arrays/Strings.
// Approach: Two pointers.
// Difficulty: Easy.
//
// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

/*
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

export function sortedSquares(arr) {
  // Time Complexity: O(n).
  // Space Complexity: O(n).

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
