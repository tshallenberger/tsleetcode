export function bubbleSort(arr: number[]): number[] {
  // compare two nums
  // if first higher than second, swap
  // else compare next two nums
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const k = j + 1;
      if (arr[j] > arr[k]) {
        // swap arr, j, j + 1
        swap(arr, j, k);
      }
    }
  }
  return arr;
}
function swap(arr: number[], j: number, k: number) {
  const temp = arr[j];
  arr[j] = arr[k];
  arr[k] = temp;
}
