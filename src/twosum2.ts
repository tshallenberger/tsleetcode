/**
 * 1, 3, 5, 7, 11
 * @param nums  1, 3, 5, 8, 11, 5
 * @param target 10
 * 1, 3
 * 3, 3
 *
 * 1st
 * {1: [], 3: [7], 5: [], 7: [3], 11: []}
 * 2nd
 * {1: [0], 3: [1], 5:[2, 5], 8: [3], 11: [4]}
 */
function twoSum(nums: number[], target: number): number[] {
  let indices: number[] = [];
  let complements: { [key: number]: number[] } = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (!complements[val]) {
      complements[val] = [i];
    } else {
      complements[val].push(i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const comp = target - val;
    if (complements[comp]) {
      let validIndex = complements[comp].find((j) => j != i);
      if (validIndex) {
        indices = [i, validIndex];
        return indices;
      }
    }
  }
  return indices;
}
