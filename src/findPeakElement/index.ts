// Instead of linear scan, use a binary search to prune slopes until you find a peak in the array
// Time complexity: O(log2(n))
export function findPeakElement(nums: number[]): number {
  return search(nums, 0, nums.length - 1);
}

function search(nums: number[], l: number, r: number): number {
  if (l == r) return l;
  let mid = parseInt(`${(l + r) / 2}`);
  if (nums[mid] > nums[mid + 1]) {
    return search(nums, l, mid); // search left
  }
  return search(nums, mid + 1, r); // search right
}
