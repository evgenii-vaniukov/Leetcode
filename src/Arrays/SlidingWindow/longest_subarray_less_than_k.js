export function longestSubarrayLessThanK(arr, k) {
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
