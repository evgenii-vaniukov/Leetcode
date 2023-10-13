// Solution to a LeetCode problem: Reverse String.
//
// Topic: Arrays/Strings.
// Approach: Two Pointers.
// Difficulty: Easy.
//
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

/*
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

/**
 * @param {character[]} s
 * @return {Array} s
 */

export function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
  return s;
}
