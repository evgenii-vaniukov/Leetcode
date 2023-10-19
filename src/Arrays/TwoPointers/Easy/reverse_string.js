// Solution to a LeetCode problem: Reverse String (Array)

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Easy.
*/

// Write a function that reverses a string. The input string is given as an array of characters arr.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {character[]} arr
 * @return {Array} ans
 */

export function reverseString(arr) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
  return arr;
}
