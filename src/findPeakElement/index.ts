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

// const tests: { s: string; p: string; res: boolean }[] = [
//   { s: `aaaa`, p: `a`, res: false }, // a doesnt match entire string of aaaa
//   { s: `aaaa`, p: `*`, res: true }, // * matches all
//   { s: `cb`, p: `?a`, res: false }, // ? matches c, but a doesnt match b
//   { s: `cba`, p: `??a`, res: true }, // a doesnt match entire string of aaaa
// ];

// tests.forEach((t) => {
//   console.log({ isMatch: isMatch(t.s, t.p), expected: t.res });
// });
const r1 = findPeakElement([1, 2, 3, 1]);
console.log(r1);
const r2 = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
console.log(r2);
const r3 = findPeakElement([3, 1, 2]);
console.log(r3);
