/**
 * Write an efficient algorithm that searches for a
 * value target in an m x n integer matrix matrix.
 * This matrix has the
 * following properties:

    Integers in each row are sorted in ascending from left to right.
    Integers in each column are sorted in ascending from top to bottom.

    m == matrix.length
    n == matrix[i].length
    1 <= n, m <= 300
    -109 <= matrix[i][j] <= 109
    All the integers in each row are sorted in ascending order.
    All the integers in each column are sorted in ascending order.
    -109 <= target <= 109
 * @param m
 * @param t
 * @returns
 */

export function searchMatrix(m: number[][], t: number): boolean {
  // Eliminate rows where row[0] > target
  // Eliminate indices where m[0][i] > target
  const firstRow = m[0];
  let invalidColumnIndex = firstRow.length;
  let invalidRowIndex = m.length;

  for (let i = 0; i < m.length; i++) {
    const row = m[i];
    const val = row[0];
    if (val == t) return true;
    if (val > t) {
      invalidRowIndex = i;
      break;
    }
  }
  for (let i = 0; i < firstRow.length; i++) {
    const val = firstRow[i];
    if (val == t) return true;
    if (val > t) {
      invalidColumnIndex = i;
      break;
    }
  }
  for (let i = 0; i < invalidRowIndex; i++) {
    const row = m[i];
    for (let j = 0; j < invalidColumnIndex; j++) {
      const val = row[j];
      if (val == t) return true;
    }
  }

  return false;
}
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
