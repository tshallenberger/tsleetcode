/**
 * To add two binary numbers,
 * we iterate from back to front,
 * adding values at each index,
 * with a carry if adding two 1s.
 * @param a
 * @param b
 * @returns sum
 */

// 11, 1
function addBinary(a: string, b: string): string {
  let max = Math.max(a.length, b.length);
  a = a.padStart(max, "0");
  b = b.padStart(max, "0");
  let carry = 0;
  let res: string[] = [];
  for (let i = max - 1; i >= 0; i--) {
    let a1 = a.charAt(i);
    let b1 = b.charAt(i);
    if (a1 == "1") {
      carry += 1;
    }
    if (b1 == "1") {
      carry += 1;
    }
    if (carry % 2 == 1) {
      res.push("1");
    } else res.push("0");
    carry = Math.floor((carry /= 2));
  }
  if (carry == 1) res.push("1");
  res.reverse();
  return res.join("");
}

console.log(addBinary("110", "11"));
