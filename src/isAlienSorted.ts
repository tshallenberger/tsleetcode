class AlienSolution {
  private _order: { [key: string]: number } = {};
  constructor(order: string) {
    this._order = order
      .split("")
      .reduce(
        (map, c, i) => ((map[c] = i), map),
        {} as { [key: string]: number }
      );
  }
  public compare(a: string, b: string): boolean {
    let min = Math.min(a.length, b.length);
    for (let i = 0; i <= min - 1; i++) {
      let a1 = a.charAt(i);
      let b1 = b.charAt(i);
      let a1Val = this._order[a1];
      let b1Val = this._order[b1];
      if (a1Val < b1Val) return true;
      else if (a1Val > b1Val) return false;
    }
    if (a.length > b.length) return false;
    return true;
  }
}
function isAlienSorted(words: string[], order: string): boolean {
  const sln = new AlienSolution(order);
  let sorted = true;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const compare = words[j];
      sorted = sln.compare(word, compare);
      if (!sorted) return false;
    }
  }
  return sorted;
}
// console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// console.log(
//   isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
// );
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
