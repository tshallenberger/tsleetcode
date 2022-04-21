/**
 Do not return anything, modify nums1 in-place instead.

 three pointers, start from end.
 0 , 1
 */
function mergeSortedArrays(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) {
      break;
    }
    const a1 = p1 >= 0 ? nums1[p1] : 0;
    const b1 = p2 >= 0 ? nums2[p2] : 0;
    if (a1 < b1) {
      nums1[p] = b1;
      p2--;
    } else if (a1 >= b1) {
      nums1[p] = a1;
      p1--;
    }
  }
  console.log(nums1);
}
mergeSortedArrays([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
