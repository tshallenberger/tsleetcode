/**
 * Initialize an empty res.
 * Start from carry = 0
 * set pointer to each end of each string: p1, p2
 * Loop over the strings from the end to the beginning using p1, p2
 * Set x1 to be equal to a digit num1[p1]. If p1 is -1, set x1 to 0.
 * Set x2 to be equal to a digit num2[p2]. If p2 is -1, set x2 to 0.
 * Compute current value: (x1 + x2 + carry) % 10 and update carry, as (x1 + x2 + carry)/10
 * append current value to the result
 * If carry is non-zero after both strings are done, append carry to res.
 * Reverse result, return string.
 * @param num1
 * @param num2
 */
function addStrings(num1: string, num2: string): string {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  while (p1 >= 0 || p2 >= 0) {}
  return num1;
}
