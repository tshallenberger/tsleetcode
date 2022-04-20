import { searchMatrix } from "./search2dMatrix/search2dMatrix";

const m1 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const t1 = 5; // true

const m2 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

const t2 = 20; // false

const m3 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const t3 = 20;

const m4 = [[-1, 3]];
const t4 = 3;
const r1 = searchMatrix(m1, t1);
const r2 = searchMatrix(m2, t2);
const r3 = searchMatrix(m3, t3);
const r4 = searchMatrix(m4, t4);
console.log({ r1, r2, r3, r4 });
// Brute force would iterate in O(N^2)
