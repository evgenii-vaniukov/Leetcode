// Solution to a LeetCode problem: Two Sum

/**  
  Topic: Hashing.
  Approach: Hash Table.
  Difficulty: Easy.
*/

// Given an array of integers and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

// Find examples in the test file.

// Input-Output Format:
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */

export function twoSum(arr, target) {
  // Time Complexity: O(n);
  // Space Complexity: O(n);

  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let complement = target - curr;

    if (map.has(complement)) {
      return [
        [i, map.get(complement)],
        [map.get(complement), i],
      ];
    }
    map.set(curr, i);
  }
  return [-1, -1];
}
