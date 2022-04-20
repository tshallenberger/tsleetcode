// Dynamic programming

export function isMatch(s: string, p: string): boolean {
  // Walk down the pattern, popping off each string, and then running match fn against s.
  // With each p node, I also pop off the matching sequence of s.
  // Ultimately, there should be an array of p -> subset(s) nodes,
  // if s is empty, return true
  // If s is not empty when I finish matching, return false

  // Ex. s: 'aaaa bccxyz.def', p: *bcc??*.def returns true?
  const pstack: string[] = p.split("");
  const sstack: string[] = s.split("");

  while (pstack.length) {
    // * - pop off next non-* pElement, pop off sequence until either matches pElement or sequence empty
    // if sequence empty, pattern matches.
    // if sequence not empty, match poppedSequence with *, add to matched, continue
    // ? - pop off sequence, match with ?, add to matched, continue
    // char - pop off sequence, check if match,
    // if match, add to matched, continue
    // else return false
  }

  if (s.length != p.length) {
    return false;
  }
  return sstack.length > 0;
}
