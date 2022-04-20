// Dynamic Programming, Kadanes
// Find where the optimal subarray begins; keep track of max subarray and current subarray,
// if its negative, reset to 0, and keep looking
// Also can use Divide and Conquer
export function maxSubArray(nums: number[]): number {
  let max = Number.NEGATIVE_INFINITY;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    current += val;
    if (current >= max) max = current;
    if (current < 0) {
      current = 0;
    }
  }
  return max;
}
