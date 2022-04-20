export function rob(nums: number[]): number {
  // Brute force: run through array of evens, run through array of odds, complexity: O(2N)
  // Include houses not directly adjacent?
  // [2, 1, 1, 2]
  // [2, 1, 1, 2, 1, 1]
  // Turn into a tree?
  // Linked list
  // Use Recursion when we have choices and need to also backtrack
  const robber = new Robber(nums);
  return robber.robFrom(0);
}

class Robber {
  public memo: Map<number, number>;
  constructor(public arr: number[]) {
    this.memo = new Map<number, number>();
  }
  public robFrom(i: number): number {
    if (i >= this.arr.length) return 0;
    if (this.memo.has(i)) {
      return this.memo.get(i) || 0;
    }
    const max = this._max(
      this.robFrom(i + 1),
      this.robFrom(i + 2) + this.arr[i]
    );
    this.memo.set(i, max);
    return max;
  }
  private _max(i: number, j: number): number {
    return i >= j ? i : j;
  }
}
const nums = [1, 2, 3, 1]; // 4
const alt = [2, 7, 9, 3, 1]; // 12, 2 + 9 + 1
const alt2 = [2, 1, 1, 2];
console.log(rob(nums)); // should equal 4, sinze 1 + 3 = 4
console.log(rob(alt));
console.log(rob(alt2));
