// Solution to a LeetCode problem: Max Consecutive Ones III

/**  
  Topic: Arrays/Strings.
  Approach: Sliding Window.
  Difficulty: Medium.
*/

// Given a binary array nums and an integer k,
// return the maximum number of consecutive 1's in the array
// if you can flip at most k 0's.

// Find examples in the 'tests' folder.

// Input-Output Format:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// [100101] 2
export function maxConsecutiveOnes(arr, k) {
  // Time Complexity: O(n);
  // Space Complexity: O(1);

  if (k == arr.length) {
    return arr.length;
  }

  let countZeros = 0;
  let ans = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      countZeros++;
    }

    while (countZeros > k) {
      if (arr[left] === 0) {
        countZeros--;
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}
