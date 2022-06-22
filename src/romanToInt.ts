const vals: { [map: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 5,
  IX: 9,
  XL: 50,
  XC: 90,
  CD: 500,
  CM: 900,
};
function romanToInt(s: string): number {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let s1 = s[i]; // I | I
    let val1 = vals[s1]; // 1
    let val2; // undefined
    if (i + 1 < s.length) {
      let tmp = s[i + 1]; // I | I
      let s2 = `${s1}${tmp}`; // II
      val2 = vals[s2]; // undefined
    }
    if (val2) {
      sum += val2;
      i += 2;
    } else {
      sum += val1; // 1
      i += 1; // 1
    }
  }
  return sum;
}

function longestCommonPrefix(strs: string[]): string {
  let s1 = strs[0]; // flower
  let prefix = ""; // ""
  for (let i = 0; i < s1.length; i++) {
    // 0, 1
    let pchar = s1[i]; // f | l
    prefix = `${prefix}${pchar}`;
    for (let j = 1; j < strs.length; j++) {
      // 1 | 2, 1
      let s2 = strs[j]; // flow | flight, flow
      if (i < s2.length) {
        // true | true, true
        let s2char = s2[i]; // f | f, l
        if (pchar != s2char) {
          return prefix;
        }
      } else {
        return prefix;
      }
    }
  }
  return prefix;
}
