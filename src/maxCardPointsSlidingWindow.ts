/**
 * initialize a moving sum of length k
 *  private queue
 *  private sum
 *  private size
 *
 * left i = 1, right j = i - k,
 * for i = k-1, i > -k, i--
 * j = i - k
 *  for l = i; l > j; l--
 *    sum += points[l]
 *  if sum > max then max = sum
 *
 * [j][][i][][x][][]
 * start at each end,
 * @param cardPoints
 * @param k
 */
function maxCardPointsSlidingWindow(cardPoints: number[], k: number): number {
  let l = cardPoints.length;
  let f = new Array(k + 1);
  f[0] = 0;
  let r = new Array(k + 1);
  r[0] = 0;
  for (let i = 0; i < k; i++) {
    let j = i + 1;
    let m = l - i - 1;
    f[j] = cardPoints[i] + f[i];
    r[j] = cardPoints[m] + r[i];
  }
  let max = 0;
  for (let i = 0; i <= k; i++) {
    let j = k - i;
    let c = f[i] + r[j];
    max = Math.max(c, max);
  }
  return max;
}
console.log(maxCardPointsSlidingWindow([1, 2, 3, 4, 5, 6, 1], 3));
