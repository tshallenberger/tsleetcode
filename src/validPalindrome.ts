function validPalindrome(s: string): boolean {
  const sln = new Solution();
  return sln.validPalindrome(s);
}
class Solution {
  private checkPalindrome(s: string, i: number, j: number): boolean {
    while (i < j) {
      if (s.charAt(i) != s.charAt(j)) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  public validPalindrome(s: string): boolean {
    let i: number = 0;
    let j: number = s.length - 1;
    while (i < j) {
      if (s.charAt(i) != s.charAt(j)) {
        return (
          this.checkPalindrome(s, i, j - 1) || this.checkPalindrome(s, i + 1, j)
        );
      }
      i++;
      j--;
    }
    return true;
  }
}
