function twoSum(nums: number[], target: number): number[] {
  const complements: { [key: number]: number[]; } = {};
  let indices: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (complements[val])
      complements[val].push(i);
    else
      complements[val] = [i];
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
