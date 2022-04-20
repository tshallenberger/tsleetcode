// import { isMatch } from "./wildcardMatching/wildcardMatching";

import { findPeakElement } from "./findPeakElement";

// const tests: { s: string; p: string; res: boolean }[] = [
//   { s: `aaaa`, p: `a`, res: false }, // a doesnt match entire string of aaaa
//   { s: `aaaa`, p: `*`, res: true }, // * matches all
//   { s: `cb`, p: `?a`, res: false }, // ? matches c, but a doesnt match b
//   { s: `cba`, p: `??a`, res: true }, // a doesnt match entire string of aaaa
// ];

// tests.forEach((t) => {
//   console.log({ isMatch: isMatch(t.s, t.p), expected: t.res });
// });
const r1 = findPeakElement([1, 2, 3, 1]);
console.log(r1);
const r2 = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
console.log(r2);
const r3 = findPeakElement([3, 1, 2]);
console.log(r3);
